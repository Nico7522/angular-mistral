import { computed, Injectable, linkedSignal, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ChatCompletionResponse } from '@mistralai/mistralai/models/components/chatcompletionresponse';
import { environment } from '../../environments/environment';
import { ContentChunk } from '@mistralai/mistralai/models/components/contentchunk';

export interface MistralRequest {
  model: string;
  messages: {
    role: 'user' | 'AI' | 'system';
    content: string;
  }[];
  temperature?: number;
  max_tokens?: number;
}

interface Message {
  role: 'user' | 'AI' | 'system';
  content: string | ContentChunk[] | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class MistralApiService {
  messageList = linkedSignal<string, Message[]>({
    source: () => {
      return this.mistralResponse.value()?.choices?.[0]?.message?.content as string;
    },
    computation: (source, previous) => {
      if (source) {
        return [...(previous?.value ?? []), { role: 'AI', content: source ?? '' }];
      }

      return previous?.value ?? [];
    },
  });
  // Signal for the current request
  private readonly requestSignal = signal<MistralRequest>({
    model: 'mistral-large-latest',
    messages: [{ role: 'user', content: '' }],
    temperature: 0.7,
    max_tokens: 1000,
  });

  // Reactive request that updates when requestSignal changes
  readonly mistralResponse = httpResource<ChatCompletionResponse>(() => {
    const request = this.requestSignal();
    return request.messages[0].content
      ? {
          url: environment.API_URL,
          method: 'POST',
          body: request,
          headers: {
            Authorization: `Bearer ${environment.API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      : undefined;
  });

  // Computed signal for the response status
  readonly responseStatus = computed(() => {
    return this.mistralResponse.status();
  });

  readonly errorMessage = computed(() => {
    return this.mistralResponse.status() === 'error' ? 'Error...' : '';
  });

  readonly loadingMessage = computed(() => {
    return this.mistralResponse.status() === 'loading' ? 'Loading...' : '';
  });

  /**
   * Update the request and trigger a new API call
   */
  updateRequest(request: Partial<MistralRequest>): void {
    const currentRequest = this.requestSignal();
    const updatedRequest = { ...currentRequest, ...request };

    this.requestSignal.set(updatedRequest);
  }

  /**
   * Send a simple message and get response
   */
  sendMessage(content: string, model = 'mistral-large-latest'): void {
    this.messageList.update(prev => [...(prev ?? []), { role: 'user', content }]);
    this.updateRequest({
      model,
      messages: [{ role: 'user', content }],
    });
  }
}

export interface MistralRequest {
  model: string;
  messages: {
    role: 'user' | 'AI' | 'system';
    content: string;
  }[];
  temperature?: number;
  max_tokens?: number;
}

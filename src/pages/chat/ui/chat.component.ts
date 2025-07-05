import { Component, computed, inject, signal } from '@angular/core';
import { MistralApiService } from '../api/mistral-api.service';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from '../../../shared/ui/message/message.component';
import { RouterLink } from '@angular/router';
import { ErrorComponent } from '../../../shared/ui/error/error.component';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, MessageComponent, RouterLink, ErrorComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  private readonly _mistralApiService = inject(MistralApiService);
  protected userInput = signal<string>('');
  protected loading = computed(() => this._mistralApiService.loading());
  protected error = computed(() => this._mistralApiService.error());
  protected messages = computed(() => this._mistralApiService.messageList());
  sendMessage(): void {
    this._mistralApiService.sendMessage(this.userInput());
    this.userInput.set('');
  }
}

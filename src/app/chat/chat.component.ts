import { Component, computed, inject, signal } from '@angular/core';
import { MistralApiService } from '../services/mistral-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  private readonly _mistralApiService = inject(MistralApiService);
  protected userInput = signal<string>('');
  protected loadingMessage = computed(() => this._mistralApiService.loadingMessage());
  protected errorMessage = computed(() => this._mistralApiService.errorMessage());
  protected messages = computed(() => this._mistralApiService.messageList());
  sendMessage(): void {
    this._mistralApiService.sendMessage(this.userInput());
    this.userInput.set('');
    console.log(this.messages());
  }
}

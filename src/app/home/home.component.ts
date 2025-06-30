import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected title = 'Hello, Mistral-integration';
  private _router = inject(Router);

  // Animation state signals
  protected isAnimating = signal<boolean>(false);
  protected buttonText = signal<string>('Test it !');

  async triggerNavigation(): Promise<void> {
    // Start animation
    this.isAnimating.set(true);
    this.buttonText.set('');

    // Add animation class to content
    const content = document.querySelector('.content') as HTMLElement;
    if (content) {
      content.classList.add('fade-out');
    }
    // Add animation class to button
    const btn = document.querySelector('.mistral-button') as HTMLElement;
    if (btn) {
      btn.classList.add('loading');
    }

    // Wait for animation to complete (1.5 seconds)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Navigate to chat page
    this._router.navigate(['/chat']);
  }
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  message = input<string>('Une erreur est survenue');
  showIcon = input<boolean>(true);
}

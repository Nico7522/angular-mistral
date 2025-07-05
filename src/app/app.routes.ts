import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/ui/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chat',
    loadComponent: () => import('../pages/chat/ui/chat.component').then(m => m.ChatComponent),
  },
];

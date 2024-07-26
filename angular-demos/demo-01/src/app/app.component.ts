import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. </p>
    <a routerLink="/cust" routerLinkActive="active" ariaCurrentWhenActive="page">Customer List</a>
    <a routerLink="/loan" routerLinkActive="active" ariaCurrentWhenActive="page">Loan List</a>
    <div>
    <router-outlet />
    </div>
  `,
  styles: [
    'h1 { background-color: lightblue; padding: 10px} p {margin: 5px}',
    'div { border:2px solid black; margin: 10px; padding: 10px }'
  ],
})
export class AppComponent {
  title = 'The India';
}

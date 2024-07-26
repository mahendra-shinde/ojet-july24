import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [CommonModule],
  template: `
      List of Loans !
      <div *ngFor="let l of loans">
        <li>{{ l.customer }} {{ l.amount }}
        </li>
      </div>
  `,
  styles: ``
})
export class LoanListComponent {
  loans = [
    {"accNo":"HL12345", "customer":"Tushar Kapoor", "amount":1450000},
    {"accNo":"HL12346", "customer":"Kapil Sharma", "amount":5500000}
  ]
}

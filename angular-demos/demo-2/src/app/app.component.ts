import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './customer.model';
import { CommonModule } from '@angular/common';
import { CustomerServiceService } from './customer-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-2';
  custList: Customer[] =[];

   constructor(private custService:CustomerServiceService){
    console.log("Loading all customers...");
    this.custService.loadAll().subscribe((data:Customer[])=>{
      this.custList = data;
    });
   }
}

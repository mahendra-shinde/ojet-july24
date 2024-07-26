import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, ObservableNotification } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  API_ENDPOINT="http://localhost:8080/api/customer/all";
  
  loadAll():Observable<Customer[]>{
    let options = { "headers": 
      new HttpHeaders({ "Accept": "application/json" }) };
      return this.httpClient.get<Customer[]>(this.API_ENDPOINT , options);
  }
  constructor(private httpClient:HttpClient) { }
}

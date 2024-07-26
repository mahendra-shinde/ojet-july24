import { Routes } from '@angular/router';
import { CustListComponent } from './cust-list/cust-list.component';
import { LoanListComponent } from './loan-list/loan-list.component';
export const routes: Routes = [
    {   path:"cust", component: CustListComponent },
    { path:"loan", component: LoanListComponent}
];

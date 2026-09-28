import { Component } from '@angular/core';
import { CustomerService } from '../services/customer-service';

@Component({
  selector: 'app-customer-group',
  standalone: false,
  templateUrl: './customer-group.html',
  styleUrl: './customer-group.css',
})
export class CustomerGroup {
  customerGroups: any
  errMessage: string = ''
  constructor(private _service: CustomerService) {
    this._service.getCustomerGroups().subscribe({
      next: (data) => { this.customerGroups = data },
      error: (err) => { this.errMessage = err.message }
    })
  }
}
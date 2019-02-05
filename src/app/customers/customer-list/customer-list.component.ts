import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CustomerActions from '../state/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new CustomerActions.LoadCustomers());
    this.store.subscribe(state => (this.customers = state.customers.customers));
  }

}

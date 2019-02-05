import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as CustomerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<fromCustomer.AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new CustomerActions.LoadCustomers());
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
  }

}

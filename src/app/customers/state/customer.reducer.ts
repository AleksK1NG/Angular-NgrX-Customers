import * as fromRoot from '../../state/app-state';
import { Customer } from '../customer.model';
import * as customerActions from './customer.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  customers: CustomerState;
}

export const initialState: CustomerState = {
  customers: [],
  loading: false,
  loaded: true,
  error: ''
};

export function customerReducer(state = initialState, action: customerActions.Action): CustomerState {
  switch (action.type) {
    case customerActions.CustomerActionsTypes.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }
    case customerActions.CustomerActionsTypes.LOAD_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        customers: action.payload
      };
    }
    case customerActions.CustomerActionsTypes.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        customers: [],
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getCustomerFeatureState = createFeatureSelector<CustomerState>(
  'customers'
);

export const getCustomers = createSelector(
  getCustomerFeatureState,
  (state: CustomerState) => state.customers
);

export const getCustomersLoading = createSelector(
  getCustomerFeatureState,
  (state: CustomerState) => state.loading
);

export const getCustomersLoaded = createSelector(
  getCustomerFeatureState,
  (state: CustomerState) => state.loaded
);
export const getError = createSelector(
  getCustomerFeatureState,
  (state: CustomerState) => state.error
);


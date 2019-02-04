import * as fromRoot from '../../state/app-state';
import { Customer } from '../customer.model';
import * as customerActions from './customer.actions';

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


// const initialState = {
//   customers: [
//     {
//       name: 'John Doe',
//       phone: '910928392098',
//       address: '123 Sun Street',
//       membership: 'Platinum',
//       id: 1
//     }
//   ],
//   loading: false,
//   loaded: true
// };
//
// export function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'LOAD_CUSTOMERS': {
//       return {
//         ...state,
//         loading: true,
//         loaded: false
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }

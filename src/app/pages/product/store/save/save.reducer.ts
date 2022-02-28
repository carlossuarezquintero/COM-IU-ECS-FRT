import { ProductResponse } from "./save.models";
export { ProductResponse} from "./save.models";
import * as fromActions from './save.actions';
import { from } from "rxjs";

export interface ListState {
  product: ProductResponse | null;
  loading: boolean | null;
  error : string | null;
}

export const initialState: ListState = {
  product: null,
  loading: null,
  error: null
}

export function reducer(state : ListState = initialState, action: fromActions.All | any) {

      switch(action.type){
        //CREATE
        case fromActions.Types.CREATE: {
          return {...state, loading: true, error: null};
        }

        case fromActions.Types.CREATE_SUCCESS: {
          return {...state, loading: false, error: null, product: action.product};
        }

        case fromActions.Types.CREATE_ERROR: {
          return {...state, loading: false, error: action.error, product: null};
        }

        //UPDATE
        case fromActions.Types.UPDATE: {
          return {...state, loading: true, error: null};
        }

        case fromActions.Types.UPDATE_SUCCESS: {
          return {...state, loading: false, error: null, product: action.product};
        }

        case fromActions.Types.UPDATE_ERROR: {
          return {...state, loading: false, error: action.error, product: null};
        }

        //READ
        case fromActions.Types.READ: {
          return {...state, loading: true, error: null};
        }

        case fromActions.Types.READ_SUCCESS: {
          return {...state, loading: false, error: null, product: action.product};
        }

        case fromActions.Types.READ_ERROR: {
          return {...state, loading: false, error: action.error, product: null};
        }

        default: {
          return state;
        }

      }



}

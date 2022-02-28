import {UserResponse} from './user.models';
import * as fromActions from './user.actions';

export interface UserState {
  entity : UserResponse | null;
  id : string | null;
  loading: boolean | null;
  error : string | null;
}


const initialState : UserState = {
  entity: null,
  id: null,
  loading: null,
  error: null
}

export function reducer(state = initialState, action: fromActions.All | any) : UserState {

    switch(action.type) {
        //init
        case fromActions.Types.INIT: {
          return {...state, loading: true};
        }

        case fromActions.Types.INIT_AUTHORIZED: {
          return {...state, loading: false, entity: action.user, id: action.id, error: null};
        }

        case fromActions.Types.INIT_UNAUTHORIZED: {
          return {...state, loading: false, entity: null, id: null, error: null};
        }

        case fromActions.Types.INIT_ERROR: {
          return {...state, loading: false, entity: null, id: null, error: action.error};
        }

        //login
        case fromActions.Types.SIGIN_IN_EMAIL: {
          return {...state, loading: true, entity: null, id: null, error: null};
        }

        case fromActions.Types.SIGIN_IN_EMAIL_SUCCESS: {
          return {...state, loading: false, entity: action.user, id: action.id, error: null};
        }

        case fromActions.Types.SIGIN_IN_EMAIL_ERROR: {
          return {...state, loading: false, entity: null, id: null, error: action.error};
        }

        //signup o registro de usuarios
        case fromActions.Types.SIGN_UP_EMAIL: {
          return {...state, loading: true, entity: null, id: null, error: null};
        }

        case fromActions.Types.SIGN_UP_EMAIL_SUCCESS: {
          return {...state, loading: false, entity: action.user, id: action.id, error: null};
        }

        case fromActions.Types.SIGN_UP_EMAIL_ERROR: {
          return {...state, loading: false, entity: null, id: null, error: action.error};
        }

        //LOGOUT o Salir de Sesion
        case fromActions.Types.SIGIN_OUT_EMAIL: {
          return {...initialState};
        }

        case fromActions.Types.SIGIN_OUT_EMAIL_SUCCESS: {
          return {...initialState};
        }

        case fromActions.Types.SIGIN_OUT_EMAIL_ERROR: {
          return {...state, loading: false, entity: null, id: null, error: action.error};
        }

        default: {
          return state;
        }
    }
}


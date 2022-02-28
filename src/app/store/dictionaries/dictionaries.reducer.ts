import {Dictionaries} from './dictionaries.models';
import * as fromActions from './dictionaries.actions';
import {Dictionary} from '@ngrx/entity';
import {min} from 'rxjs/operators';


export interface DictionariesState {
  entities: Dictionaries | null;
  loading : boolean | null;
  error: string | null;
}

const initialState: DictionariesState = {
  entities: null,
  loading: null,
  error: null
}

export function reducer(state=initialState, action: fromActions.All | any) : DictionariesState {
    switch(action.type){

      case fromActions.Types.READ: {
        return {...state, loading: true, error: null, entities: null};
      }

      case fromActions.Types.READ_SUCCESS: {
        return {...state, loading: false, error: null, entities: action.dictionaries};
      }

      case fromActions.Types.READ_ERROR: {
        return {...state, loading: false, error: action.error, entities: null};
      }

      default: {
        return state;
      }
    }
}

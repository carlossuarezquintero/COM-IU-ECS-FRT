import { ListEffects } from './save/save.effects';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromList from './save/save.reducer';


export interface ProductState {

  list: fromList.ListState
}

export const reducers : ActionReducerMap<ProductState> = {

  list: fromList.reducer
}

export const effects : any[] = [
  ListEffects
]

export const getProductState = createFeatureSelector<ProductState>('product');

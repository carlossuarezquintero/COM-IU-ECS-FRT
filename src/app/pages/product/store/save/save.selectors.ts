import {createSelector} from '@ngrx/store';
import { getProductState, ProductState } from '../index';

import { ListState } from './save.reducer';


export const getListState = createSelector(
  getProductState,
  (state: ProductState) => state.list
)

export const getProduct = createSelector(
  getListState,
  (state: ListState) => state.product
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)


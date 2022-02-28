import {createSelector} from '@ngrx/store';
import { getShopState, ShopState} from '../index';

import {ListState} from './list.reducer';

export const getListState = createSelector(
  getShopState,
  (state: ShopState) => state.list
)

export const getShop = createSelector(
  getListState,
  (state: ListState) => state.pagination
)

export const getPaginationRequest = createSelector(
  getListState,
  (state: ListState) => state.requestPagination
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading
)



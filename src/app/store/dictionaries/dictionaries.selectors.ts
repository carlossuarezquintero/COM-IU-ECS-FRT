import { templateJitUrl } from '@angular/compiler';
import {createSelector, createFeatureSelector} from '@ngrx/store';
import {DictionariesState} from './dictionaries.reducer';


export const getDictionariesState = createFeatureSelector<DictionariesState>('dictionaries');


export const getDictionaries = createSelector(
 getDictionariesState,
 (state)  => state.entities
)

export const getLoading = createSelector(
  getDictionariesState,
  (state)  => state.loading
 )

export const getIsReady = createSelector(
  getDictionariesState,
  (state) => state.entities && !state.loading
)


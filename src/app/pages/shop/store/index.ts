import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromList from './list/list.reducer';
import { ListEffects } from "./list/list.effects";

export interface ShopState{
  list: fromList.ListState
}

export const reducers: ActionReducerMap<ShopState> = {
  list: fromList.reducer
}

export const effects : any[] = [
    ListEffects
]

export const getShopState = createFeatureSelector<ShopState>('shop');

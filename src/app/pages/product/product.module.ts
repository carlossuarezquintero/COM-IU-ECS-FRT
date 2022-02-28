import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducers, effects} from './store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature('product', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class ProductModule { }

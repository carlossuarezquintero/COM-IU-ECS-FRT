import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducers, effects} from './store';
import {MatButtonModule} from '@angular/material/button';


import { ButtonModule } from '@app/shared/buttons';
import { SpinnerModule } from '@app/shared/indicators';
import { ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { SelectModule, FormFieldModule, InputModule } from '@app/shared/controls';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ShopComponent,
    FilterComponent,
    PaginatorComponent,
    ProductComponent,
    ProductsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', reducers),
    EffectsModule.forFeature(effects),
    FormFieldModule,
    ButtonModule,
    SpinnerModule,
    ReactiveFormsModule,
    MatCardModule,
    SelectModule,
    MatPaginatorModule,
    InputModule
  ]
})
export class ShopModule { }

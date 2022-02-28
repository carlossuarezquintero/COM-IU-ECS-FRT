import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProductRoutingModule } from './update-product-routing.module';
import { UpdateProductComponent } from './update-product.component';


@NgModule({
  declarations: [
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    UpdateProductRoutingModule
  ]
})
export class UpdateProductModule { }

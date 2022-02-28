import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, InputModule,SelectModule } from '@app/shared/controls';
import { ButtonModule } from '@app/shared/buttons';
import { SpinnerModule } from '@app/shared/indicators';
import { PopupsModule, UserPhotoModule } from '@app/shared';


@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    ButtonModule,
    SpinnerModule,
    PopupsModule,
    UserPhotoModule,
    SelectModule
  ]
})
export class NewProductModule { }

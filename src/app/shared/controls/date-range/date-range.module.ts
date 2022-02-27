import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range.component';
import { DateModule } from '../date/date.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DateRangeComponent
  ],
  imports: [
    CommonModule,
    DateModule,
    ReactiveFormsModule
  ],
  exports: [
    DateRangeComponent
  ]
})
export class DateRangeModule { }

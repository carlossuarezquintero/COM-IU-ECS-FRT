import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {regex, regexErrors, markFormGroupTouched} from '@app/shared/utils';

import {ControlItem} from '@app/models/frontend';

import {NotificationService} from '@app/services';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  regexErrors = regexErrors;

  items!: ControlItem[];

  showSpinner = false;

  constructor(private fb: FormBuilder, private notification: NotificationService) {
      this.isInline = true;
      this.items = [
        { label: 'Uno', value: 1},
        { label: 'Dos', value: 2},
        { label: 'Tres', value: 3},
        { label: 'Cuatro', value: 4},
        { label: 'Cinco', value: 5},
      ]


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.number)
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({
      input: '987',
      password: 'VaxiDrezCursos%2022',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2022,5,10).getTime(),
        to: new Date(2022,11,10).getTime(),
      }
    });
  }

  onSubmit(): void{

    if(!this.form.valid){
      markFormGroupTouched(this.form);
    }

  }
  organizarElemento(){
    this.isInline = !this.isInline;
  }

  onToggleDisabled(): void {
    if(this.form.enabled){
      this.form.disable();
    }else{
      this.form.enable();
    }
  }

  onToggleSpinner(): void{
    this.showSpinner = !this.showSpinner;
  }

  onSuccess(): void{
    this.notification.success("El procedimiento fue exitoso");
  }

  onError(): void{
    this.notification.error("Se encontraron errores en el proceso");
  }

  onFilesChanged(urls: string | string[]): void {
      console.log('urls', urls) ;
  }

}


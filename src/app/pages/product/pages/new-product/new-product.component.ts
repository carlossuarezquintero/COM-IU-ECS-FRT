import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromDictionaries from '@app/store/dictionaries';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';
import { ControlItem } from '@app/models/frontend';
import { ControlEntities } from '@app/shared/utils/form';
import { select, Store } from '@ngrx/store';
import { regex, regexErrors, markFormGroupTouched } from '@app/shared/utils';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductComponent implements OnInit {
  loading$ !: Observable<boolean | null>;
  form !: FormGroup;
  dictionaries$ !: Observable<fromDictionaries.Dictionaries>;
  categories !: ControlItem[];
  marca !: ControlItem[];
  controls !: ControlEntities;
  regexErrors = regexErrors;

  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.store.pipe(select(fromDictionaries.getDictionaries))
      .subscribe((data: any) => {
        if (data) {
          this.categories = data.categories.controlItems as ControlItem[];
          console.log(data);
          this.marca = data.marca.controlItems as ControlItem[];

          this.controls = {
            categoria: {
              items: this.categories,
              changed: () => { }
            },
            marca: {
              items: this.marca,
              changed: () => { }
            },
          }
        }
      });



    this.form = this.fb.group({
      nombre: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],

      descripcion: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],


      stock: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.pattern(regex.number)
        ]
      }],


      precio: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.pattern(regex.number)
        ]
      }],

      photoURL: [null],
      categoria: null,
      marca: null
    })


    this.controls = {
      categoria: {
        items: this.categories,
        changed: () => { }
      },
      marca: {
        items: this.marca,
        changed: () => { }
      },
    }


  }

  onSubmit() : void {

    if(this.form.valid){
      this.loading$ = this.store.pipe(select(fromList.getLoading));
      const value = this.form.value;

      const product : fromList.ProductCreateRequest = {
        nombre : value.nombre,
        descripcion: value.descripcion,
        categoriaId : value.categoria,
        marcaId: value.marca,
        precio: value.precio,
        stock: value.stock,
        imagen: value.photoURL
      }

      this.store.dispatch(new fromList.Create(product));
    }else{
      markFormGroupTouched(this.form);
    }


  }


  onFilesChanged(url: any) : void {
    if(url){
      this.form.controls.photoURL.setValue(url);
    }
  }




}

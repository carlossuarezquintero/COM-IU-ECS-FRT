import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pagination } from './store/list';
import * as fromList from './store/list';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  loading$ !: Observable<boolean | null>;
  pagination$ !: Observable<Pagination>;
  params = new HttpParams();
  constructor(   private store: Store<fromList.ListState>,
 ) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.pagination$ = this.store.pipe(select(fromList.getShop)) as Observable<Pagination>;
    

    this.params = this.params.set('pageIndex', 1);
    this.params = this.params.set('pageSize', 10);



    this.store.dispatch(new fromList.Read(this.params, this.params.toString()));

  
    
  }

}

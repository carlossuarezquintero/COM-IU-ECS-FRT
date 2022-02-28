import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import * as fromUser from './store/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   user$ !: Observable<fromUser.UserResponse>;
   isAuthorized$ !: Observable<boolean>;

   constructor(
      private store: Store<fromRoot.State>,
      private router: Router
   ){}

   ngOnInit():void {
      this.user$ = this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
     
      this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized)) as Observable<boolean>;

      this.store.dispatch(new fromDictionaries.Read());

      this.store.dispatch(new fromUser.Init());

   }

   onSignOut():void {
     localStorage.removeItem('token');
     this.store.dispatch(new fromUser.SignOut());
     this.router.navigate(['/auth/login']);
   }

}

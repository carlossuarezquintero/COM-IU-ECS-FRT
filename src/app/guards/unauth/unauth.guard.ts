import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { select,Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import { Observable } from 'rxjs';
import * as fromUser from '@app/store/user';
import { filter, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})
export class UnauthGuard implements CanActivate,CanActivateChild,CanLoad{

    constructor(
        private router:Router,
        private store:Store<fromRoot.State>
    ){}

;

    private check():Observable<boolean>{
        return this.store.pipe(select(fromUser.getUserState)).pipe(
            filter(state => !state.loading),
            tap(state =>{
                if(state.id){
                    this.router.navigate(['/']);
                }
            }),
            map(state => !state.id)
        )
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check();
      }


      canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check();
      }


      canLoad(
        route: Route,
        segment: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check();
      }
      
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'new',
    loadChildren: () => import('./pages/new-product/new-product.module').then(m=>m.NewProductModule),
    canActivate:[AuthGuard]
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/update-product/update-product.module').then(m=>m.UpdateProductModule),
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./views/productos/productos.module').then(m => m.ProductosModule)
}];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

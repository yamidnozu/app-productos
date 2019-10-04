import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { ListarPedidosComponent } from './pages/listar-pedidos/listar-pedidos.component';


const routes: Routes = [
  {  path: '',  component: ListaProductosComponent},
  {  path: 'pedidos',  component: ListarPedidosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }

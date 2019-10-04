
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SimpleModalModule } from 'ngx-simple-modal';
import { PedirProductoModalComponent } from './pages/pedir-producto-modal/pedir-producto-modal.component';
import { ListarPedidosComponent } from './pages/listar-pedidos/listar-pedidos.component';

@NgModule({
  declarations: [ListaProductosComponent, ProductoComponent, PedirProductoModalComponent, ListarPedidosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    SimpleModalModule.forRoot({ container: 'modal-form' })
  ], entryComponents: [
    PedirProductoModalComponent
  ]
})
export class ProductosModule { }



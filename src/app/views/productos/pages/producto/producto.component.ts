import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OverlayFullscreenComponent } from 'src/app/layouts/overlay-fullscreen/overlay-fullscreen.component';
import { SimpleModalService } from 'ngx-simple-modal';
import { PedirProductoModalComponent } from '../pedir-producto-modal/pedir-producto-modal.component';
import { PersistenciaService } from 'src/app/core/persistencia.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @ViewChild('overlayfullscreeen', { static: true }) ofsc: OverlayFullscreenComponent;
  @Input() producto;
  constructor(
    private simpleModalService: SimpleModalService,
    private persistenciaService: PersistenciaService
  ) { }

  ngOnInit() {
  }

  public clkImagen(producto): void {
    this.ofsc.abrir(producto.imagen, producto.descripcion);
  }

  public pedirProducto(producto) {

    this.simpleModalService.addModal(PedirProductoModalComponent, {
      titulo: 'Solicitud del producto',
      contenido: 'Completa la información para poder realizar el producto, gracias '
    })
      .subscribe((datos: any) => {
        if (!datos) { return; }

        // Se genera una clave con respecto al tiempo, que no se repetiria
        const clave = new Date().getTime().toString();
        datos = { id: clave, datos, producto };

        if (this.persistenciaService.guardar({ clave, valor: datos, modulo: 'productos' })) {
          alert(`Almacenado correctamente!\n\nEl ID es ${clave}`);
        } else {
          alert('Su pedido no se ha almacenado, intente denuevo');
        }
      });

  }
}

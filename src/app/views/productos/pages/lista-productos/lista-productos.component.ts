import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  public productos$: Observable<any>;
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  public cargarProductos(): void {
    this.productos$ = this.productosService.cargarProductos();
  }
}

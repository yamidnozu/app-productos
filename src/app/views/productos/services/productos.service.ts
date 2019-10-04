import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private pathProds = 'productos';
  private path = environment.path;


  constructor(private httpClient: HttpClient) { }

  /**
   * @description Recupera todos los productos
   */
  public cargarProductos = () => this.httpClient.get(this.path + this.pathProds);
  /**
   * @description Filtra de una lista actualizada de productos, el id solicitado
   */
  public filtrarProductosId = (idProducto: number) => this.cargarProductos()
    .pipe(filter((prod: any) => prod.idProducto === idProducto))

}

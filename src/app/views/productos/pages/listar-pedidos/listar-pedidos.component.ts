import { Component, OnInit } from '@angular/core';
import { PersistenciaService } from 'src/app/core/persistencia.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {
  public pedidos = [];
  public pedidosFiltro = [];
  public input: FormControl = new FormControl();

  constructor(
    private persistenciaService: PersistenciaService
  ) { }

  ngOnInit() {
    this.leerPedidos();
  }

  leerPedidos() {
    this.pedidos = this.persistenciaService.leerModulo({ modulo: 'productos' });
    this.pedidosFiltro = this.pedidos.slice(0, this.pedidos.length);
  }

  filtrar(id: string) {
    id = id.trim();
    this.pedidosFiltro = [...this.pedidos];
    this.pedidosFiltro = [] // filtrados && filtrados.length ? filtrados : [];
    const filtrados = this.pedidos.filter((registro) => registro.id.includes(id));
    this.pedidosFiltro = filtrados;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenciaService {

  constructor() { }

  guardar(opcion: { clave: string, valor: string, modulo: string }): boolean {
    try {
      localStorage.setItem(JSON.stringify(`${opcion.modulo}_${opcion.clave}`), JSON.stringify(opcion.valor));
      return true;
    } catch (error) {
      return false;
    }
  }

  leer(opcion: { clave: string }): any {
    const valor = localStorage.getItem(opcion.clave);
    return valor ? JSON.parse(valor) : null;
  }

  leerModulo(opcion: { modulo: string }) {
    const length = localStorage.length;
    const respuesta = [];
    for (let i = 0; i < length; i++) {
      const key = localStorage.key(i) + '';
      console.log('Key', localStorage.getItem(key) , key );
      if (key.includes(opcion.modulo)) {
        console.log('Incluido', key);
        respuesta.push(JSON.parse(localStorage.getItem(key).replace(opcion.modulo + '_', '')));
      }
    }
    return respuesta;
  }
}

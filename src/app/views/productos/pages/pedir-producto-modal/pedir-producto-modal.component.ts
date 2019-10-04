import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
export interface PromptModel {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-pedir-producto-modal',
  templateUrl: './pedir-producto-modal.component.html',
  styleUrls: ['./pedir-producto-modal.component.css']
})
export class PedirProductoModalComponent extends SimpleModalComponent<PromptModel, string> implements OnInit {
  private form = this.fb.group({
    nombre: [null, Validators.required],
    fechaNac: [null, Validators.required],
    direccion: [null, Validators.required],
    idCiudad: [null, Validators.required],
    rutaArchivo: [null]
  });

  public ciudades = [
    { nombre: 'Popayán', idCiudad: 1 },
    { nombre: 'Bogotá', idCiudad: 2 },
    { nombre: 'Medellín', idCiudad: 3 },
  ];
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
  }

  mostrarError(campo: string): boolean {
    return this.form.controls[campo].touched && this.form.controls[campo].invalid;
  }

  apply() {
    this.result = this.form.value;
    this.close();
  }
}

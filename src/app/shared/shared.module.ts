import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayFullscreenComponent } from '../layouts/overlay-fullscreen/overlay-fullscreen.component';


@NgModule({
  declarations: [
    OverlayFullscreenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ], exports: [
    OverlayFullscreenComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

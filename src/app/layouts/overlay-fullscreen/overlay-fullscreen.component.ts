import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-overlay-fullscreen',
  templateUrl: './overlay-fullscreen.component.html',
  styleUrls: ['./overlay-fullscreen.component.css']
})
export class OverlayFullscreenComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav: ElementRef;
  @Output() cerro = new EventEmitter<any>(); // Por si alguna cosa
  public urlImg: string = null;
  public titulo: string = null;
  constructor() { }
  ngOnInit() {
  }
  public cerrar(): void {
    this.nav.nativeElement.style.width = '0%';
    this.cerro.emit();
  }
  public abrir(urlImg: string, titulo: string): void {
    this.urlImg = urlImg;
    this.titulo = titulo;
    this.nav.nativeElement.style.width = '100%';
  }
}

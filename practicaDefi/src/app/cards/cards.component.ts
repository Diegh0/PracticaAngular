import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  articulos!: Articulo[];
  articuloSeleccionado!: Articulo | null;
  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  constructor(private servicioArticulos:ArticulosService){}

  ngOnInit() {
    this.articulos= this.servicioArticulos.getArticulos();
  }
 
}

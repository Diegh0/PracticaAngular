import { Component, Input } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.css']
})
export class CardArticuloComponent {
  @Input() articulo!: Articulo
  articuloSeleccionado!: Articulo | null;
  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  constructor(private servicioArticulos:ArticulosService){}

  borrar(id: string) {
    this.servicioArticulos.deleteArticulo(id);
  }
  
  modificar() {
    if (this.articuloSeleccionado != null) {
      let articuloModificado: Articulo = {
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio
      };
      this.servicioArticulos.putArticulo(articuloModificado);
    }
    this.articuloSeleccionado = null;
  }
  cancelar() {
    this.articuloSeleccionado = null;
  }
  ver(id: string) {
    this.articuloSeleccionado = this.servicioArticulos.getArticulo(id);
    this.id = this.articuloSeleccionado.id;
    this.nombre = this.articuloSeleccionado.nombre;
    this.descripcion = this.articuloSeleccionado.descripcion;
    this.precio = this.articuloSeleccionado.precio;
  }
}

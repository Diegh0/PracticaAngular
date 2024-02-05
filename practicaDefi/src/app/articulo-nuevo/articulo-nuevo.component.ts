import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo-nuevo',
  templateUrl: './articulo-nuevo.component.html',
  styleUrls: ['./articulo-nuevo.component.css']
})
export class ArticuloNuevoComponent {

  articulo!:Articulo
  articuloNuevo: Articulo = { id: '', nombre: '', descripcion: '', precio:0  };

  constructor(
    private servicioArticulos:ArticulosService,
    private router:Router){}
  anyadirArticulo(){
    if (this.servicioArticulos.getArticulo(this.articuloNuevo.id) !== undefined){
      alert("No se puede insertar el articulo")
      this.router.navigate(["/articulos/cards"])

    } 
    this.servicioArticulos.addArticulo(this.articuloNuevo);
    this.router.navigate(["/articulos/cards"])
  }
}

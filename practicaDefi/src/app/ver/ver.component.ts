import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from '../Servicios/articulos.service';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent {
  articulo!:Articulo
  articuloSeleccionado!: Articulo | null;
  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;


  constructor(
    private rutaActiva:ActivatedRoute,
    private servicioArticulos:ArticulosService,
    private router:Router){}
    
    ngOnInit(){
      let id= this.rutaActiva.snapshot.params['id']
      this.articulo=this.servicioArticulos.getArticulo(id)
      console.log(this.articulo);
          this.id=this.articulo.id,
          this.nombre= this.articulo.nombre,
          this.descripcion=this.articulo.descripcion,
          this.precio= this.articulo.precio


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
      this.router.navigate(["/articulos/cards"])
    }

}

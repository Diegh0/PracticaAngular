import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {
  articulo!:Articulo
  //Para poder usar el activateRoute
  constructor(
    private rutaActiva:ActivatedRoute,
    private servicioArticulos:ArticulosService,
    private router:Router){}
  ngOnInit(){
    //para poder acceder a los parametros
    let id= this.rutaActiva.snapshot.params['id']
    this.articulo=this.servicioArticulos.getArticulo(id)
  }
  borrar(){
    this.servicioArticulos.deleteArticulo(this.articulo.id)
    this.router.navigate(["/articulos/cards"])
  }
}

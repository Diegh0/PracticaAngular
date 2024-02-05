import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-articulo-filtrado',
  templateUrl: './articulo-filtrado.component.html',
  styleUrls: ['./articulo-filtrado.component.css']
})
export class ArticuloFiltradoComponent {

  constructor(
    private ruta:ActivatedRoute,
    private servicioArticulos:ArticulosService
  ){}
ngOnInit(){
  //Sacamos parametros de la ruta
  let precio:number
  let orden:string
  this.ruta.queryParams.subscribe(params=>{precio=params["precio"]
                                          orden=params["orden"]
                                          this.articulos=this.servicioArticulos.filtrarArticulos(precio,orden)
                                        })
}
articulos!:Articulo[]

}

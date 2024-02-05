import { Injectable } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  articulos:Articulo[]=ARTICULOS

  acceder(){
    
    let contraseña:string="alumno";
    let respuesta!:string|null;
    respuesta=prompt("Indica tu constraseña");
    if(respuesta==contraseña){
      return true
    }else{
      return false
    }
  }

  filtrarArticulos(precio:number,orden:string){
    //MIRAR PARA QUE ERA EL ARRAY FROM
    let articulosFiltrados=this.articulos.filter(a=>a.precio>=precio)
    articulosFiltrados.sort((a,b)=>a.precio-b.precio)

    if(orden==="asc"){
      return articulosFiltrados
    }
    else{
      return articulosFiltrados.reverse()
    }
  }

  getArticulos(){
    return this.articulos
  }

  getArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    return this.articulos[pos]
  }

  addArticulo(articulo:Articulo){
    this.articulos.push(articulo)
  }

  putArticulo(articulo:Articulo){
    let pos=this.articulos.findIndex(a=>a.id==articulo.id)
    this.articulos[pos]=articulo
  }

  deleteArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    this.articulos.splice(pos, 1)
  }

}

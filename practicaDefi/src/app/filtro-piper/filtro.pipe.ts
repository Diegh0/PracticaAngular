import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from '../Modelos/articulo';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(articulos: Articulo[], filtroEstado: string): Articulo[] {
    let articulosFiltrados=[...articulos]
    
    if (!filtroEstado || filtroEstado === 'Todas') {
      return articulos;
    } else if (filtroEstado === 'Precio menor a mayor') { 
      articulosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (filtroEstado === 'Precio mayor a menor') {
      articulosFiltrados.sort((a, b) => b.precio - a.precio);
    }
    
    return articulosFiltrados || []; 
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ErrorComponent } from './error/error.component';
import { CardsComponent } from './cards/cards.component';
import { BorrarComponent } from './borrar/borrar.component';
import { VerComponent } from './ver/ver.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ArticuloNuevoComponent } from './articulo-nuevo/articulo-nuevo.component';
import { ArticuloFiltradoComponent } from './articulo-filtrado/articulo-filtrado.component';
import { Guarda1Guard } from './Guarda/guarda1.guard';
import { ClientesComponent } from './clientes/clientes.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';

const routes: Routes = [
  { path: '', component:PantallaInicioComponent},
  { path:'indice', component:PantallaInicioComponent},
  { path:'articulos',component:ArticulosComponent},
  { path:'articulos/cards',canActivate:[Guarda1Guard], component:CardsComponent},
  { path: 'filtro',component:FiltroComponent},
  { path:'borrar/:id', component:BorrarComponent},
  { path:'ver/:id',component:VerComponent},
  { path:'añadir',component:ArticuloNuevoComponent},
  { path:'articulosFiltrados',component:ArticuloFiltradoComponent},
  { path:'clientes',component:ClientesComponent},
  { path: 'detalleCliente/:id',component:DetalleClienteComponent},
  { path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

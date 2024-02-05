import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { CardArticuloComponent } from './card-articulo/card-articulo.component';
import { CardsComponent } from './cards/cards.component';
import { BorrarComponent } from './borrar/borrar.component';
import { VerComponent } from './ver/ver.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ArticuloNuevoComponent } from './articulo-nuevo/articulo-nuevo.component';
import { ArticuloFiltradoComponent } from './articulo-filtrado/articulo-filtrado.component';
import { FiltroPipe } from './filtro-piper/filtro.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes/clientes.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PantallaInicioComponent,
    ArticulosComponent,
    ErrorComponent,
    CardArticuloComponent,
    CardsComponent,
    BorrarComponent,
    VerComponent,
    FiltroComponent,
    ArticuloNuevoComponent,
    ArticuloFiltradoComponent,
    FiltroPipe,
    ClientesComponent,
    DetalleClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

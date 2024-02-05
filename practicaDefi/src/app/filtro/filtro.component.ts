import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  orden!:string
  precio!:number
  constructor( private router:Router){}
  ver(){
    console.log(this.orden)
    console.log(this.precio)
    this.router.navigate(["/articulosFiltrados"],
    {queryParams:{orden:this.orden,precio:this.precio}}
    )

  }
}

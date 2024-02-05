import { Component } from '@angular/core';
import { ServiciosHttpService } from '../Servicios/servicios-http.service';
import { Cliente } from '../Modelos/cliente';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  constructor(
    private servicioClientes:ServiciosHttpService,
    private route:Router
  ){}
  clientes!:Cliente[]
  ngOnInit(){
    this.servicioClientes.getClientes().subscribe(datos=>this.clientes=datos,
                                                  error=>console.log("DAW->"+error.status))

  }

}

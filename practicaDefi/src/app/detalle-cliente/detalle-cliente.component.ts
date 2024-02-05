import { Component } from '@angular/core';
import { Cliente } from '../Modelos/cliente';
import { ActivatedRoute } from '@angular/router';
import { ServiciosHttpService } from '../Servicios/servicios-http.service';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent {

  cliente!:Cliente
  // cliente:Cliente={id:0,nombre:"",cargo:""}

  constructor(
    private rutaActiva:ActivatedRoute,
    private servicioClientes:ServiciosHttpService
  ){}
  
  ngOnInit(){
    let id= this.rutaActiva.snapshot.params['id']
    this.servicioClientes.getCliente(id).subscribe(dato=>{
      this.cliente=dato;
    })
  }
}

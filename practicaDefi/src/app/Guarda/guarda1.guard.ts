import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticulosService } from '../Servicios/articulos.service';

@Injectable({
  providedIn: 'root'
})
export class Guarda1Guard implements CanActivate {
  constructor(
    private router:Router,
    private servicioArticulo:ArticulosService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.servicioArticulo.acceder()){
        return true
      }else{
        this.router.navigate([""])
        return false
      }
    
  }
  
}

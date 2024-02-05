import { Injectable } from '@angular/core';
import { Cliente } from '../Modelos/cliente';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosHttpService {

  constructor(
    private miHTTP:HttpClient
  ){}

  url="http://localhost:3000/clientes"
  
  getClientes():Observable<Cliente[]>{
    return this.miHTTP.get<Cliente[]>(this.url)
                      .pipe(retry(5))
    }
    getCliente(id:number):Observable<Cliente>{
        
          return this.miHTTP.get<Cliente>(this.url+"/"+id)
                            .pipe(retry(5))

        
      }
      private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('Error de conexión:', error.error);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(`Backend error codigo ${error.status}, mensaje: `, error.statusText);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
        }
    
}

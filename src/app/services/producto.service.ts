import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiURL = "http://localhost:8081/producto";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }


  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/consultar', { ...this.httpOptions});
  }

  getImage(url: string): Observable<Blob> {
    return this.httpClient.get(url, { ...this.httpOptions, responseType: 'blob' });
  }

  create(producto:Producto): Observable<any> {
    return this.httpClient.post(this.apiURL + '/crear', JSON.stringify(producto), { ...this.httpOptions, responseType: 'text' })
    .pipe(
      catchError(this.errorHandler)
    )
  }


  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/consultar/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(producto:Producto): Observable<any> {

    return this.httpClient.post(this.apiURL + '/editar', JSON.stringify(producto), { ...this.httpOptions, responseType: 'text' })

    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(idproducto:number){
    return this.httpClient.delete(this.apiURL + '/eliminar/' + idproducto, { ...this.httpOptions, responseType: 'text' })

    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}

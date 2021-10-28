import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginaCliente } from '../clientes/PaginaCliente.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly url = environment.apiURL + 'cliente'

  constructor(
    private http:HttpClient
  ) { }

  paginaCliente(page: any, size: any): Observable<PaginaCliente> {
    const params = new HttpParams()

      .set('page', page)
      .set('size', size)
    return this.http.get<any>(`${this.url}?${params.toString()}`)
  }
}

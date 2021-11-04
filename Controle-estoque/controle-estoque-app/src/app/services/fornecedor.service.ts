import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Fornecedor } from '../fornecedor/Fornecedor.model';
import { PaginaFornecedor } from '../fornecedor/PaginaFornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  readonly url = environment.apiURL + 'fornecedor'
  constructor(private http: HttpClient) { }

  paginaFornecedor(page: any, size: any): Observable<PaginaFornecedor> {
    const params = new HttpParams()

      .set('page', page)
      .set('size', size)
    return this.http.get<any>(`${this.url}?${params.toString()}`)
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.url, fornecedor);
  }
}

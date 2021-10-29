import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginaProduto } from '../produtos/PaginaProduto.model';
import { Produto } from '../produtos/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  readonly url = environment.apiURL + 'produto'

  constructor(
    private http: HttpClient
  ) { }

  paginaProduto(page: any, size: any): Observable<PaginaProduto> {
    const params = new HttpParams()

      .set('page', page)
      .set('size', size)
    return this.http.get<any>(`${this.url}?${params.toString()}`)
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }
}

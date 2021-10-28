import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Categoria } from '../categorias/Categoria.model';
import { PaginaCategoria } from '../categorias/PaginaCategoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  readonly url = environment.apiURL + 'categoria'

  constructor(
    private http: HttpClient
  ) { }

  paginaCategoria(page: any, size: any): Observable<PaginaCategoria> {
    const params = new HttpParams()

      .set('page', page)
      .set('size', size)
    return this.http.get<any>(`${this.url}?${params.toString()}`)
  }

  salvar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }
}

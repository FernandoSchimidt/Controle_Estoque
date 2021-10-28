import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginaSubCategoria } from '../subcategoria/PaginaSubcategoria.model';
import { environment } from '../../environments/environment'
import { SubCategoria } from '../subcategoria/Subcategoria.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {

  readonly url = environment.apiURL + 'subcategoria'

  constructor(
    private http: HttpClient
  ) { }

  paginaSubCategoria(page: any, size: any): Observable<PaginaSubCategoria> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(`${this.url}?${params.toString()}`)
  }
  salvar(subCategoria: SubCategoria): Observable<SubCategoria> {
    return this.http.post<SubCategoria>(this.url, subCategoria);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { UndMedida } from '../und-medida/components/UndMedida.model';
import { PaginaUndMedida } from '../und-medida/PaginaUndMedida.model';

@Injectable({
  providedIn: 'root'
})
export class UndMedidaService {

  readonly url = environment.apiURL + 'undmedida'

  constructor(
    private http: HttpClient
  ) { }

  paginaUndMedida(page: any, size: any): Observable<PaginaUndMedida> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(`${this.url}?${params.toString()}`)
  }

  salvar(undMedida: UndMedida): Observable<UndMedida> {
    return this.http.post<UndMedida>(this.url, undMedida);
  }

  listarUndMedidas(): Observable<UndMedida[]> {
    return this.http.get<UndMedida[]>(this.url + '/all')
  }
}

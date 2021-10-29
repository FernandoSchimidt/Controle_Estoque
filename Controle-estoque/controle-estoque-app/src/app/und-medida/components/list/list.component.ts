import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UndMedidaService } from 'src/app/services/und-medida.service';
import { UndMedida } from '../UndMedida.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  undMedidas: UndMedida[] = [];
  colunas = ['id', 'umed_nome']

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 15, 20]

  constructor(
    private service: UndMedidaService,
    private dialog: MatDialog
    , private router: Router
  ) { }

  ngOnInit(): void {
    this.listaUmed(this.pagina, this.tamanho);
  }
  
  listaUmed(page = 0, size = 10) {
    this.service.paginaUndMedida(page, size)
      .subscribe(res => {
        this.undMedidas = res.content;
        this.totalElementos = res.totalElements;
        this.pagina = res.number;
      })
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listaUmed(this.pagina, this.tamanho)
  }
}

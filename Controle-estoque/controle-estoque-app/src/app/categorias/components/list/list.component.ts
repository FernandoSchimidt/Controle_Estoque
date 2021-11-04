import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from '../../Categoria.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categorias: Categoria[] = [];
  colunas = ['id', 'nome']

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 15, 200]

  constructor(
    private service: CategoriaService,
    private dialog: MatDialog
    , private router: Router
  ) { }

  ngOnInit(): void {
    this.listaCategorias(this.pagina, this.tamanho);
  }
  
  listaCategorias(page = 0, size = 10) {
    this.service.paginaCategoria(page, size)
      .subscribe(res => {
        this.categorias = res.content;
        this.totalElementos = res.totalElements;
        this.pagina = res.number;
      })
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listaCategorias(this.pagina, this.tamanho)
  }
  

}

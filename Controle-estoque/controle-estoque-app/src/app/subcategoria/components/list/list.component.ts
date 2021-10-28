import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';
import { SubCategoria } from '../../Subcategoria.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  subcategorias: SubCategoria[] = [];
  colunas = ['id', 'nome', 'cat_nome']

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 15, 20]

  constructor(
    private service: SubCategoriaService
  ) { }

  ngOnInit(): void {
    this.listaSubCategorias()
  }

  listaSubCategorias(page = 0, size = 10) {
    this.service.paginaSubCategoria(page, size)
      .subscribe(res => {
        this.subcategorias = res.content;
    console.log(this.subcategorias)

        this.totalElementos = res.totalElements;
        this.pagina = res.number;
      })
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listaSubCategorias(this.pagina, this.tamanho)
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from '../../Produto.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  produtos: Produto[] = [];
  colunas = ['id', 'pro_nome', 'pro_descricao', 'pro_valorpago', 'pro_valorvenda', 'pro_qtde', 'undMedida', 'categoria', 'subCategoria']

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 15, 20]

  constructor(
    private service: ProdutoService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaProdutos(this.pagina, this.tamanho);
  }

  listaProdutos(page = 0, size = 10) {
    this.service.paginaProduto(page, size)
      .subscribe(res => {
        this.produtos = res.content;
        this.totalElementos = res.totalElements;
        this.pagina = res.number;
      })
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listaProdutos(this.pagina, this.tamanho)
  }
  openDialog(){
    
  }

}

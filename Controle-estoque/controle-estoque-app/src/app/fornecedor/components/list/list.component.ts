import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Fornecedor } from '../../Fornecedor.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  colunas = ['id', 'for_nome', 'for_rsocial', 'for_ie', 'for_cnpj', 'for_cep', 'for_endereco', 'for_bairro', 'for_fone', 'for_cel', 'for_email', 'for_endnumero', 'for_cidade', 'for_estado']

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 15, 20]


  constructor(
    private service: FornecedorService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaFornecedores(this.pagina, this.tamanho);
  }
  listaFornecedores(page = 0, size = 10) {
    this.service.paginaFornecedor(page, size)
      .subscribe(res => {
        this.fornecedores = res.content;
        this.totalElementos = res.totalElements;
        this.pagina = res.number;
      })
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listaFornecedores(this.pagina, this.tamanho)
  }

  openDialog() {

  }
}

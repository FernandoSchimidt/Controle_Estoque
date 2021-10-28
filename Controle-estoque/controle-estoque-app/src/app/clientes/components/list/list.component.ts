import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../../Cliente.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientes: Cliente[] = [];
  colunas = ['id', 'cli_nome', 'cli_cpfcnpj', 'cli_rgie', 'cli_rsocial', 'cli_tipo', 'cli_cep', 'cli_endereco', 'cli_bairro', 'cli_fone', 'cli_cel', 'cli_email', 'cli_endnumero', 'cli_cidade', 'cli_estado']

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 15, 20]

  constructor(
    private service: ClienteService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaClientes(this.pagina, this.tamanho);
  }
  listaClientes(page = 0, size = 10) {
    this.service.paginaCliente(page, size)
      .subscribe(res => {
        this.clientes = res.content;
        this.totalElementos = res.totalElements;
        this.pagina = res.number;
      })
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listaClientes(this.pagina, this.tamanho)
  }

  openDialog() {
    
  }
}

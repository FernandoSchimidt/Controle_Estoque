import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../../Cliente.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  clienteForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      cli_nome: ['', [Validators.required]],
      cli_cpfcnpj: ['', [Validators.required]],
      cli_rgie: ['', [Validators.required]],
      cli_rsocial: ['', [Validators.required]],
      cli_tipo: ['', [Validators.required]],
      cli_cep: ['', [Validators.required]],
      cli_endereco: ['', [Validators.required]],
      cli_bairro: ['', [Validators.required]],
      cli_fone: ['', [Validators.required]],
      cli_cel: ['', [Validators.required]],
      cli_email: ['', [Validators.required, Validators.email]],
      cli_endnumero: ['', [Validators.required]],
      cli_cidade: ['', [Validators.required]],
      cli_estado: ['', [Validators.required]],
    })
  }
  submit() {
    const formValues = this.clienteForm.value;
    let cliente: Cliente = new Cliente(
      formValues.cli_nome,
      formValues.cli_cpfcnpj,
      formValues.cli_rgie,
      formValues.cli_rsocial,
      formValues.cli_tipo,
      formValues.cli_cep,
      formValues.cli_endereco,
      formValues.cli_bairro,
      formValues.cli_fone,
      formValues.cli_cel,
      formValues.cli_email,
      formValues.cli_endnumero,
      formValues.cli_cidade,
      formValues.cli_estado,
    );
    this.service.create(cliente)
      .subscribe(res => {
        this.router.navigateByUrl('/cliente');
      }, erro => {
        alert(erro)
      })
  }


}

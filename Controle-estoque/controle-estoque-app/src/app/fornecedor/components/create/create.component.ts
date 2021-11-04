import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Fornecedor } from '../../Fornecedor.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  fornecedorForm!: FormGroup;


  constructor(
    private service: FornecedorService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fornecedorForm = this.fb.group({
      for_nome: ['', [Validators.required]],
      for_rsocial: ['', [Validators.required]],
      for_ie: ['', [Validators.required]],
      for_cnpj: ['', [Validators.required]],
      for_cep: ['', [Validators.required]],
      for_endereco: ['', [Validators.required]],
      for_bairro: ['', [Validators.required]],
      for_fone: ['', [Validators.required]],
      for_cel: ['', [Validators.required]],
      for_email: ['', [Validators.required,Validators.email]],
      for_endnumero: ['', [Validators.required]],
      for_cidade: ['', [Validators.required]],
      for_estado: ['', [Validators.required]],

    })
  }
  submit() {
    const formValues = this.fornecedorForm.value;
    let fornecedor: Fornecedor = new Fornecedor(
      formValues.for_nome,
      formValues.for_rsocial,
      formValues.for_ie,
      formValues.for_cnpj,
      formValues.for_cep,
      formValues.for_endereco,
      formValues.for_bairro,
      formValues.for_fone,
      formValues.for_cel,
      formValues.for_email,
      formValues.for_endnumero,
      formValues.for_cidade,
      formValues.for_estado,
    );
    this.service.create(fornecedor)
      .subscribe(res => {
        this.router.navigateByUrl('/fornecedor');
      }, (err) => {
        alert(err)
      })
  }

}

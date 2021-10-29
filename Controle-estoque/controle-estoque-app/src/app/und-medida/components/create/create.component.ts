import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UndMedidaService } from 'src/app/services/und-medida.service';
import { UndMedida } from '../UndMedida.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  undMedidaForm!: FormGroup;

  constructor(
    private service: UndMedidaService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.undMedidaForm = this.fb.group({
      umed_nome: ['', [Validators.required]]
    })

  }
  submit() {
    const formValues = this.undMedidaForm.value;
    let undMedida: UndMedida = new UndMedida(formValues.umed_nome);
    this.service.salvar(undMedida)
      .subscribe(res => {
        this.router.navigateByUrl('/und-medida')
      },
        (err) => {
          alert(err)
        })
  }

}

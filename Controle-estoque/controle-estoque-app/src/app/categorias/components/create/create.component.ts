import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from '../../Categoria.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  categoriaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriaForm = this.fb.group({
      cat_nome: ['', [Validators.required]]
    })
  }
  submit() {
    const formValues = this.categoriaForm.value;
    console.log(formValues)
    let categoria: Categoria = new Categoria(formValues.cat_nome);
    console.log(categoria)
    this.service.salvar(categoria)
      .subscribe(res => {
        this.router.navigateByUrl('/categoria')
      },
        (err) => {
          alert(err)
        })
  }

}

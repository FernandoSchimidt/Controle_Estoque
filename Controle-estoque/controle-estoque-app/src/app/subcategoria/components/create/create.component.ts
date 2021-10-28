import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categorias/Categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';
import { SubCategoria } from '../../Subcategoria.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  scategoriaForm!: FormGroup;
  categorias$!: Observable<Categoria[]>;
  selectedValue!: string;

  constructor(
    private fb: FormBuilder,
    private subCatService: SubCategoriaService,
    private service: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scategoriaForm = this.fb.group({
      scat_nome: ['', [Validators.required]],
      cat_cod: ['', [Validators.required]]
    });
    this.categorias$ = this.service.listarCategorias();

    console.log(this.categorias$)
  }

  submit() {
    const formValues = this.scategoriaForm.value;
    console.log(formValues)
    let scategoria: SubCategoria = new SubCategoria(
      formValues.scat_nome,
      formValues.cat_cod
      );
    console.log(scategoria)
    this.subCatService.salvar(scategoria)
      .subscribe(res => {
        this.router.navigateByUrl('/sub-categoria')
      },
        (err) => {
          alert(err)
        })
  }

}

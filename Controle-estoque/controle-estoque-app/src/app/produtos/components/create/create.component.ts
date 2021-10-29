import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categorias/Categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { SubCategoriaService } from 'src/app/services/sub-categoria.service';
import { UndMedidaService } from 'src/app/services/und-medida.service';
import { SubCategoria } from 'src/app/subcategoria/Subcategoria.model';
import { UndMedida } from 'src/app/und-medida/components/UndMedida.model';
import { Produto } from '../../Produto.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  produtoForm!: FormGroup;
  categorias$!: Observable<Categoria[]>;
  scategorias$!: Observable<SubCategoria[]>;
  undMedida$!: Observable<UndMedida[]>;
  selectedValue!: string;
  selectedValue2!: string;
  selectedValue3!: string;


  constructor(
    private fb: FormBuilder,
    private subCatService: SubCategoriaService,
    private categoriService: CategoriaService,
    private undMedidaService: UndMedidaService,
    private service: ProdutoService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.produtoForm = this.fb.group({
      pro_nome: ['', [Validators.required]],
      pro_descricao: ['', [Validators.required]],
      pro_valorpago: [null, [Validators.required]],
      pro_valorvenda: [null, [Validators.required]],
      pro_qtde: [null, [Validators.required]],
      undMedida: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      subCategoria: ['', [Validators.required]],
    });
    this.categorias$ = this.categoriService.listarCategorias();
    this.scategorias$ = this.subCatService.listarSubCategorias();
    this.undMedida$ = this.undMedidaService.listarUndMedidas();

  }

  submit() {
    const formValues = this.produtoForm.value;
    delete (formValues.subCategoria.categoria)
    let produto: Produto = new Produto(
      formValues.pro_nome,
      formValues.pro_descricao,
      formValues.pro_valorpago,
      formValues.pro_valorvenda,
      formValues.pro_qtde,
      formValues.undMedida,
      formValues.categoria,
      formValues.subCategoria
    );
    this.service.create(produto)
      .subscribe(res => {
        this.router.navigateByUrl('/produto')
      },
        (err) => {
          alert(err)
        })

  }

}

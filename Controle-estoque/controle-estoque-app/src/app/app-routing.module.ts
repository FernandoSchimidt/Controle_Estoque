import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'categoria', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule) },
  { path: 'cliente', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'fornecedor', loadChildren: () => import('./fornecedor/fornecedor.module').then(m => m.FornecedorModule) },
  { path: 'sub-categoria', loadChildren: () => import('./subcategoria/subcategoria.module').then(m => m.SubcategoriaModule) },
  { path: 'produto', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'und-medida', loadChildren: () => import('./und-medida/und-medida.module').then(m => m.UndMedidaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

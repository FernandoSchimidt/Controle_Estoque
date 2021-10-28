import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoriaRoutingModule } from './subcategoria-routing.module';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SubcategoriaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class SubcategoriaModule { }

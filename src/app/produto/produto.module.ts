import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { AppBootstrapModule } from '../shared/app-bootstrap/app-bootstrap.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    AppBootstrapModule,
  ],
  exports:[
  ]
})
export class ProdutoModule { }

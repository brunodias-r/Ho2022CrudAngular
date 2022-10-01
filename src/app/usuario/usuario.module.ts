import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports:[
  ]
})
export class UsuarioModule { }

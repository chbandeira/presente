import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunosComponent } from './alunos.component';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos-routing.module';
import { CommonModule } from '@angular/common';
import { TelefoneModule } from '../telefone/telefone.module';
import { TurmasModule } from '../turmas/turmas.module';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlunosRoutingModule,
    TelefoneModule,
    TurmasModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }

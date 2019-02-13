import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunosComponent } from './alunos.component';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos-routing.module';
import { CommonModule } from '@angular/common';
import { TurmasModule } from '../turmas/turmas.module';
import { TelefonesModule } from '../telefones/telefones.module';
import { ResponsaveisModule } from '../responsaveis/responsaveis.module';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlunosRoutingModule,
    TelefonesModule,
    TurmasModule,
    ResponsaveisModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }

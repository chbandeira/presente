import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunosComponent } from './alunos.component';
import { AlunosService } from './alunos.service';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunosRoutingModule } from './alunos-routing.module';
import { CommonModule } from '@angular/common';
import { TelefoneModule } from '../telefone/telefone.module';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlunosRoutingModule,
    NgbTypeaheadModule,
    TelefoneModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }

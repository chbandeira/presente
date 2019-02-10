import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmasService } from './turmas.service';
import { TurmaComponent } from './turma/turma.component';
import { TurmasComponent } from './turmas.component';
import { SharedModule } from '../shared/shared.module';
import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmaSearchModalComponent } from './turma-search-modal/turma-search-modal.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TurmaComponent,
    TurmasComponent,
    TurmaSearchModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbTypeaheadModule,
    TurmasRoutingModule
  ],
  entryComponents: [TurmaSearchModalComponent],
  providers: [TurmasService],
  exports: [TurmaSearchModalComponent]
})
export class TurmasModule { }

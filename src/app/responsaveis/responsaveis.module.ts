import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsavelSearchModalComponent } from './responsavel-search-modal/responsavel-search-modal.component';
import { SharedModule } from '../shared/shared.module';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ResponsavelSearchModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbTypeaheadModule
  ],
  entryComponents: [ResponsavelSearchModalComponent],
  exports: [ResponsavelSearchModalComponent]
})
export class ResponsaveisModule { }

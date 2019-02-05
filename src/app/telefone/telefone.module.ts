import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefoneModalComponent } from './telefone-modal/telefone-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TelefoneModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [TelefoneModalComponent],
  exports: [TelefoneModalComponent]
})
export class TelefoneModule { }

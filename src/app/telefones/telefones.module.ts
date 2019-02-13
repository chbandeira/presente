import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TelefoneAddModalComponent } from './telefone-add-modal/telefone-add-modal.component';

@NgModule({
  declarations: [TelefoneAddModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [TelefoneAddModalComponent],
  exports: [TelefoneAddModalComponent]
})
export class TelefonesModule { }

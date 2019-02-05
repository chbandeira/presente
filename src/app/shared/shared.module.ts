import { NgModule } from '@angular/core';
import { PaginationService } from './pagination/pagination.service';
import { PaginationComponent } from './pagination/pagination.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { MessageFormComponent } from './messages/message-form/message-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbDateParserFormatter, NgbDatepickerI18n, NgbAlertModule, NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePtParserFormatter } from './formatter/ngb-date-pt-parser-formatter';
import { CommonModule } from '@angular/common';
import { TurnoPipe } from './pipes/turno.pipe';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalExclusionComponent } from './modals/modal-exclusion/modal-exclusion.component';
import { LoadingComponent } from './loading/loading.component';
import { NgbDatepickerPt } from './formatter/ngb-datapicker-pt';
import { TipoTelefonePipe } from './pipes/tipo-telefone.pipe';

@NgModule({
  declarations: [
    SimNaoPipe,
    TurnoPipe,
    TipoTelefonePipe,
    PaginationComponent,
    SnackbarComponent,
    MessageFormComponent,
    ModalExclusionComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgbAlertModule,
    NgbPaginationModule,
    NgbModalModule,
    TextMaskModule
  ],
  exports: [
    TextMaskModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgbAlertModule,
    NgbPaginationModule,
    NgbModalModule,
    SimNaoPipe,
    TurnoPipe,
    TipoTelefonePipe,
    PaginationComponent,
    SnackbarComponent,
    MessageFormComponent,
    ModalExclusionComponent,
    LoadingComponent
  ],
  providers: [
    PaginationService,
    NotificationService,
    NgbDatePtParserFormatter,
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerPt },
    { provide: NgbDateParserFormatter, useClass: NgbDatePtParserFormatter }
  ]
})
export class SharedModule { }

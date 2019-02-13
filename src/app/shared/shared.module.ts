import { NgModule } from '@angular/core';
import { PaginationService } from './pagination/pagination.service';
import { PaginationComponent } from './pagination/pagination.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { MessageFormComponent } from './messages/message-form/message-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbDateParserFormatter, NgbDatepickerI18n, NgbAlertModule, NgbPaginationModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatePtParserFormatter } from './formatter/ngb-date-pt-parser-formatter';
import { CommonModule } from '@angular/common';
import { TurnoPipe } from './pipes/turno.pipe';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalExclusionComponent } from './modals/modal-exclusion/modal-exclusion.component';
import { NgbDatepickerPt } from './formatter/ngb-datapicker-pt';
import { TipoTelefonePipe } from './pipes/tipo-telefone.pipe';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
  declarations: [
    SimNaoPipe,
    TurnoPipe,
    TipoTelefonePipe,
    PaginationComponent,
    SnackbarComponent,
    MessageFormComponent,
    ModalExclusionComponent
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
    TextMaskModule,
    NgbTooltipModule,
    NgxLoadingModule.forRoot({
      backdropBorderRadius: '3px'
    })
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
    NgxLoadingModule,
    NgbTooltipModule
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

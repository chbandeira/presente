import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponsaveisService } from '../responsaveis.service';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Responsavel } from '../responsavel/responsavel.model';

class ResponsavelFormatter {

  constructor(private submitForm: FormGroup) { }

  formatterResponsavelInput = (r: Responsavel) => {
    this.submitForm.get('idResponsavel').setValue(r.id);
    this.submitForm.get('nomeResponsavel').setValue(r.nome);
    this.submitForm.get('cpf').setValue(r.cpf);
    this.submitForm.get('email').setValue(r.email);
    this.submitForm.get('email2').setValue(r.email2);
    this.submitForm.get('enviarEmail').setValue(r.enviarEmail ? 'true' : 'false');
    this.submitForm.get('telefones').setValue(r.telefones);
    // TODO implement
    // this.submitForm.get('turno').setValue(r.enviarMensagem);
    return null; // customized
  }

}

@Component({
  selector: 'app-responsavel-search-modal',
  templateUrl: './responsavel-search-modal.component.html',
  styleUrls: ['./responsavel-search-modal.component.scss']
})
class ResponsavelSearchModalComponent implements OnInit {

  submitForm: FormGroup;
  responsavelFormatter: ResponsavelFormatter;
  searching = false;
  searchFailed = false;

  constructor(public activeModal: NgbActiveModal, private responsaveisService: ResponsaveisService) { }

  ngOnInit() {
    this.responsavelFormatter = new ResponsavelFormatter(this.submitForm);
  }

  searchResponsavel = (text: Observable<string>) =>
    text.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.responsaveisService.searchByTerm(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  disableFields() {
    this.submitForm.controls['nomeResponsavel'].disable();
    this.submitForm.controls['cpf'].disable();
    this.submitForm.controls['email'].disable();
    this.submitForm.controls['email2'].disable();
    this.submitForm.controls['enviarEmail'].disable();
    this.submitForm.controls['disabledResponsavel'].setValue('true');
    this.activeModal.close();
  }
}

export { ResponsavelSearchModalComponent, ResponsavelFormatter };

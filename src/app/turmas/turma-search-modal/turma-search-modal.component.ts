import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { TurmasService } from '../turmas.service';
import { FormGroup } from '@angular/forms';
import { Turma } from '../turma/turma.model';
import { TurnoPipe } from '../../shared/pipes/turno.pipe';

class TurmaFormatter {

  constructor(private submitForm: FormGroup) { }

  formatterTurmaResult = (t: Turma) => {
      const turno = new TurnoPipe().transform(t.turno);
      let text = `Turma: ${t.descricao ? t.descricao : '-'}`;
      text = `${text} | Série: ${t.serie ? t.serie : '-'}`;
      text = `${text} | Sala: ${t.sala ? t.sala : '-'}`;
      text = `${text} | Turno: ${turno === null ? '-' : turno}`;
      return text;
  }

  formatterTurmaInput = (t: Turma) => {
      this.submitForm.get('turma').setValue(t.descricao);
      this.submitForm.get('serie').setValue(t.serie);
      this.submitForm.get('sala').setValue(t.sala);
      this.submitForm.get('turno').setValue(t.turno);
      return null; // customized
  }

}

@Component({
  selector: 'app-turma-search-modal',
  templateUrl: './turma-search-modal.component.html',
  styleUrls: ['./turma-search-modal.component.scss']
})
class TurmaSearchModalComponent implements OnInit {

  submitForm: FormGroup;
  turmaFormatter: TurmaFormatter;
  searching = false;
  searchFailed = false;

  constructor(public activeModal: NgbActiveModal, private turmasService: TurmasService) { }

  ngOnInit() {
    this.turmaFormatter = new TurmaFormatter(this.submitForm);
  }

  searchTurma = (text: Observable<string>) =>
    text.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.turmasService.searchByTerm(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

}

export { TurmaFormatter, TurmaSearchModalComponent };

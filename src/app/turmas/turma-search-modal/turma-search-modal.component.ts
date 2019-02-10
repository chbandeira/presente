import { NgbActiveModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { TurmaFormatter } from '../turma/turma.formatter';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { TurmasService } from '../turmas.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-turma-search-modal',
  templateUrl: './turma-search-modal.component.html',
  styleUrls: ['./turma-search-modal.component.scss']
})
export class TurmaSearchModalComponent implements OnInit {

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

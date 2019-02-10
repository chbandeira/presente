import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TurmasService } from '../turmas.service';
import { Turma } from './turma.model';
import { ActivatedRoute } from '@angular/router';
import { FormValidation } from '../../shared/form-validation';
import { Subject, pipe } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit, OnDestroy {

  private sub = new Subject();

  formValidation = new FormValidation();
  submitForm: FormGroup;
  turma: Turma;
  loading: boolean;

  constructor(
    private turmasService: TurmasService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loading = true;
    this.turma = new Turma();
    this.startForm();
    this.turma.id = this.route.snapshot.params['id'];
    if (this.turma.id) {
      this.formValidation.editMode = true;
      this.turmasService.getTurma(this.turma.id)
        .pipe(
          takeUntil(this.sub),
          finalize(() => this.loading = false))
        .subscribe(t => {
          this.turma = t;
          this.startForm();
        });
    } else {
      this.loading = false;
    }
  }

  ngOnDestroy() {
    this.sub.next();
    this.sub.complete();
  }

  private startForm() {
    this.submitForm = this.formBuilder.group({
      descricao: [this.turma.descricao],
      serie: [this.turma.serie],
      sala: [this.turma.sala],
      turno: [this.turma.turno]
    });
  }

  title(): string {
    return this.turma.id ? 'Alterar' : 'Nova';
  }

  newTurma() {
    this.turma = new Turma();
    this.startForm();
    this.formValidation.reset();
  }

  clean() {
    this.formValidation.reset();
    this.startForm();
  }

  private getTurmaFromForm(): Turma {
    const turma: Turma = this.submitForm.value;
    turma.id = this.turma.id;
    return turma;
  }

  save() {
    this.loading = true;
    if (this.submitForm.valid) {
      const turma = this.getTurmaFromForm();
      this.turmasService.save(turma).pipe(
        finalize(() => this.loading = false)
      ).subscribe(id => {
        if (Number(id)) {
          if (!this.turma.id) {
            this.formValidation.alreadyNew = true;
          }
          this.turma.id = id;
        }
        this.formValidation.validate('Turma salva com sucesso!');
      }, err => {
        if (err.error.errors) {
          this.formValidation.invalidate(err.error.errors[0]['messageString']);
        } else {
          this.formValidation.invalidate(err.error);
        }
      });
    } else {
      this.loading = false;
    }
  }

}

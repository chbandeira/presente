import { AlunosService } from './../../alunos/alunos.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegistrosService } from '../registros.service';
import { RegistroEnum } from './registro.enum';
import { FormValidation } from './../../shared/form-validation';
import { Registro } from './registro.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, DoCheck {

  formValidation = new FormValidation();
  tipoRegistro: string;
  title = 'Entrada';
  submitForm: FormGroup;
  loading: boolean;
  base64Image: any;
  matricula: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private registrosService: RegistrosService,
    private alunosService: AlunosService) { }

  ngOnInit() {
    this.tipoRegistro = this.route.snapshot.params['tipoRegistro'];
    this.startForm();
    this.loadUrlFoto();
  }

  private startForm() {
    this.submitForm = this.fb.group({
      matricula: ['']
    });
  }

  ngDoCheck() {
    if (this.tipoRegistro !== this.route.snapshot.params['tipoRegistro']) {
      this.tipoRegistro = this.route.snapshot.params['tipoRegistro'];
      this.startForm();
      this.formValidation.reset();
    }
    this.title = this.route.snapshot.params['tipoRegistro'] === RegistroEnum[RegistroEnum.saida] ? 'Saída' : 'Entrada';
  }

  registrar() {
    this.loading = true;
    if (!this.submitForm.value.matricula) {
      this.formValidation.invalidate('Informe a matrícula para registro');
      this.loading = false;
      this.base64Image = null;
      return;
    }
    this.matricula = this.submitForm.value.matricula;
    const registro = new Registro(
      RegistroEnum[this.route.snapshot.params['tipoRegistro']],
      this.submitForm.value.matricula);
    this.registrosService.registrar(registro).pipe(
      finalize(() => {
        this.loading = false;
        this.loadUrlFoto();
      })
    ).subscribe((retorno: Registro) => {
      this.formValidation.validate(retorno.messageRetorno);
      this.startForm();
    }, err => {
      this.formValidation.invalidate(err.error.message);
    });
  }

  clean() {
    this.formValidation.reset();
    this.loading = false;
    this.base64Image = null;
  }

  loadUrlFoto() {
    if (this.matricula) {
      const imageUrl = `${environment.urlFotos}${this.matricula}.jpg?${(new Date()).getTime()}`;
      this.alunosService.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
        this.base64Image = 'data:image/jpg;base64,' + base64data;
      });
    }
  }
}

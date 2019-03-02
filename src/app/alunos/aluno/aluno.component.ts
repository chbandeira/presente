import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlunosService } from '../alunos.service';
import { Aluno } from './aluno.model';
import { ActivatedRoute } from '@angular/router';
import { NgbDatePtParserFormatter } from './../../shared/formatter/ngb-date-pt-parser-formatter';
import { AlunoErrors } from './aluno.errors';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Masks } from './../../shared/formatter/masks';
import { FormValidation } from '../../shared/form-validation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TurmaSearchModalComponent } from '../../turmas/turma-search-modal/turma-search-modal.component';
import { TelefoneAddModalComponent } from '../../telefones/telefone-add-modal/telefone-add-modal.component';
import { Telefone } from '../../telefones/telefone/telefone.model';
import { ResponsavelSearchModalComponent } from '../../responsaveis/responsavel-search-modal/responsavel-search-modal.component';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit, OnDestroy {

  formValidation = new FormValidation();
  submitForm: FormGroup;
  fileToUpload: File;
  aluno: Aluno;
  alunoErrors: AlunoErrors;
  masks = Masks;
  alunoImage: any;
  defaultImage = './assets/img/avatar-blank.png';

  $aluno: Subscription;
  loading: boolean;

  constructor(
    private alunosService: AlunosService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dateFormatter: NgbDatePtParserFormatter,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.loading = true;
    this.formValidation = new FormValidation();
    this.aluno = new Aluno();
    this.alunoErrors = new AlunoErrors();
    this.startForm();
    this.aluno.id = this.route.snapshot.params['id'];
    if (this.aluno.id) {
      this.formValidation.editMode = true;
      this.formValidation.alreadyNew = false;
      this.$aluno = this.alunosService.getAluno(this.aluno.id).pipe(
        finalize(() => {
          this.loading = false;
        })
        ).subscribe(a => {
          this.aluno = a;
          if (this.aluno.nomeResponsavel) {
            this.disableResponsavel();
          }
          this.startForm();
          this.loadUrlFoto();
      });
    } else {
      this.loading = false;
      this.loadUrlFoto();
    }
  }

  ngOnDestroy() {
    if (this.$aluno) {
      this.$aluno.unsubscribe();
    }
  }

  private startForm() {
    this.submitForm = this.formBuilder.group({
      nome: [this.aluno.nome],
      dataNascimento: [this.dateFormatter.parse(this.aluno.dataNascimento)],
      matricula: [this.aluno.matricula],
      serie: [this.aluno.serie],
      turma: [this.aluno.turma],
      sala: [this.aluno.sala],
      turno: [this.aluno.turno],
      alunoBolsista: [this.aluno.alunoBolsista],
      idResponsavel: [this.aluno.idResponsavel],
      nomeResponsavel: [this.aluno.nomeResponsavel],
      cpf: [this.aluno.cpf],
      email: [this.aluno.email],
      email2: [this.aluno.email2],
      enviarEmail: [this.aluno.enviarEmail],
      telefones: [this.aluno.telefones],
      disabledResponsavel: [false],
      urlFoto: ['']
    });
  }

  title(): string {
    return this.aluno.id ? 'Alterar' : 'Novo';
  }

  save() {
    this.loading = true;
    this.alunoErrors = new AlunoErrors();
    if (this.submitForm.valid) {
      const aluno = this.getAlunoFromForm();
      this.alunosService.save(aluno, this.fileToUpload).pipe(
        finalize(() => {
          this.loading = false;
          this.loadUrlFoto();
        })
      ).subscribe(a => {
        this.submitForm.value.dataNascimento = this.dateFormatter.parse(this.aluno.dataNascimento);
        if (!this.aluno.id) {
          this.formValidation.alreadyNew = true;
        }
        this.aluno.id = a.id;
        this.aluno.urlFoto = a.urlFoto;
        if (this.submitForm.value.nomeResponsavel) {
          this.disableResponsavel();
        }
        this.formValidation.validate('Aluno salvo com sucesso!');
      }, err => {
        this.formValidation.invalidate('Erro ao salvar Aluno', err.error);
        if (err.error.status === 422) {
          err.error.errors.forEach(e => {
            switch (e.fieldName) {
              case 'nome':
                this.alunoErrors.nome = e.messageString;
                break;
              case 'matricula':
                this.alunoErrors.matricula = e.messageString;
                break;
              case 'cpf':
                this.alunoErrors.cpf = e.messageString;
                break;
              case 'dataNascimento':
                this.alunoErrors.dataNascimento = e.messageString;
                break;
              case 'email':
                this.alunoErrors.email = e.messageString;
                break;
              case 'email2':
                this.alunoErrors.email2 = e.messageString;
                break;
              case 'nomeResponsavel':
                this.alunoErrors.nomeResponsavel = e.messageString;
                break;
              default:
                break;
            }
          });
        }
      });
    } else {
      this.loading = false;
    }
  }

  private getAlunoFromForm(): Aluno {
    const aluno: Aluno = this.submitForm.value;
    aluno.dataNascimento = this.dateFormatter.format(this.submitForm.value.dataNascimento);
    aluno.id = this.aluno.id;
    return aluno;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload) {
      const reader = new FileReader();
      reader.onload = e => this.alunoImage = reader.result;
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  clean() {
    this.cleanResponsavel();
    this.cleanFoto();
    this.startForm();
    this.formValidation.reset();
    this.alunoErrors = new AlunoErrors();
    this.alunoImage = null;
  }

  newAluno() {
    this.clean();
  }

  openAddTelefone() {
    const modalRef = this.modalService.open(TelefoneAddModalComponent);
    modalRef.componentInstance.aluno = this.submitForm.value;
  }

  removeTelefone(telefone: Telefone) {
    const i = this.submitForm.value.telefones.findIndex(x => x === telefone);
    this.submitForm.value.telefones.splice(i, 1);
  }

  openSearchTurma() {
    const modalRef = this.modalService.open(TurmaSearchModalComponent);
    modalRef.componentInstance.submitForm = this.submitForm;
  }

  cleanResponsavel() {
    this.submitForm.controls['idResponsavel'].setValue('');
    this.submitForm.controls['nomeResponsavel'].setValue('');
    this.submitForm.controls['cpf'].setValue('');
    this.submitForm.controls['email'].setValue('');
    this.submitForm.controls['email2'].setValue('');
    this.submitForm.controls['telefones'].setValue([]);
    this.submitForm.controls['enviarEmail'].setValue('false');
    this.submitForm.controls['nomeResponsavel'].enable();
    this.submitForm.controls['cpf'].enable();
    this.submitForm.controls['email'].enable();
    this.submitForm.controls['email2'].enable();
    this.submitForm.controls['enviarEmail'].enable();
    this.submitForm.controls['disabledResponsavel'].setValue('');
  }

  openSearchResponsavel() {
    const modalRef = this.modalService.open(ResponsavelSearchModalComponent);
    modalRef.componentInstance.submitForm = this.submitForm;
  }

  disableResponsavel() {
    this.submitForm.controls['nomeResponsavel'].disable();
    this.submitForm.controls['cpf'].disable();
    this.submitForm.controls['email'].disable();
    this.submitForm.controls['email2'].disable();
    this.submitForm.controls['enviarEmail'].disable();
    this.submitForm.controls['disabledResponsavel'].setValue('true');
  }

  loadUrlFoto() {
    if (this.aluno.urlFoto) {
      this.alunosService.getBase64ImageFromURL(this.aluno.urlFoto).subscribe(urlImg => this.alunoImage = urlImg);
    }
  }

  cleanFoto() {
    this.fileToUpload = null;
    this.alunoImage = null;
    this.submitForm.controls['urlFoto'].setValue('');
  }
}

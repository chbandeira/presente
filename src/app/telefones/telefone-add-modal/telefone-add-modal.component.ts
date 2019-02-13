import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../alunos/aluno/aluno.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Masks } from '../../shared/formatter/masks';
import { FormValidation } from '../../shared/form-validation';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Telefone } from '../telefone/telefone.model';

@Component({
  selector: 'app-telefone-add-modal',
  templateUrl: './telefone-add-modal.component.html',
  styleUrls: ['./telefone-add-modal.component.scss']
})
export class TelefoneAddModalComponent implements OnInit {

  aluno: Aluno;
  telefoneForm: FormGroup;
  masks = Masks;
  formValidation: FormValidation;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formValidation = new FormValidation();
    this.telefoneForm = this.formBuilder.group({
      telefoneTipo: ['0'],
      telefone: [''],
      telefoneDescricao: ['']
    });
  }

  addTelefone() {
    if (!this.aluno.telefones) {
      this.aluno.telefones = [];
    }
    const telefone = new Telefone();
    telefone.tipo = this.telefoneForm.value.telefoneTipo;
    telefone.telefone = this.telefoneForm.value.telefone;
    telefone.descricao = this.telefoneForm.value.telefoneDescricao;
    if (telefone.telefone.length === 0) {
      this.formValidation.invalidate('Campo telefone obrigatório!');
      return;
    }
    if (telefone.telefone.search('_') > 0) {
      this.formValidation.invalidate('Número de telefone inválido!');
      return;
    }
    if (this.aluno.telefones.findIndex(x => x.telefone === telefone.telefone) >= 0) {
      this.formValidation.invalidate('Esse número já foi adicionado!');
      return;
    }
    if (!this.aluno.telefones) {
      this.aluno.telefones = [];
    }
    this.aluno.telefones.push(telefone);
    this.activeModal.close();
  }

  onChangeTipoTelefoneSelect() {
    this.telefoneForm.controls['telefone'].setValue('');
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Masks } from '../../shared/formatter/masks';
import { Telefone, Aluno } from '../../alunos/aluno/aluno.model';
import { FormValidation } from '../../shared/form-validation';

@Component({
  selector: 'app-telefone-modal',
  templateUrl: './telefone-modal.component.html',
  styleUrls: ['./telefone-modal.component.scss']
})
export class TelefoneModalComponent implements OnInit {

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
}

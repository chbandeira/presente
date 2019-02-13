import { Telefone } from "../../telefones/telefone/telefone.model";

export class Aluno {
    id: number;
    nome: string;
    matricula: string;
    dataNascimento: string;
    turma: string;
    serie: string;
    sala: string;
    turno: number;
    alunoBolsista: boolean;
    urlFoto: string;
    anoLetivo: number;

    idResponsavel: string;
    nomeResponsavel: string;
    cpf: string;
    email: string;
    email2: string;
    telefones: Telefone[] = [];
    enviarEmail: boolean;
    enviarMensagem: boolean;
}

class Aluno {
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
    nomeResponsavel: string;
    cpf: string;
    email: string;
    email2: string;
    telefones: Telefone[];
    enviarEmail: boolean;
    enviarMensagem: boolean;
    anoLetivo: number;
}

class Telefone {
    tipo: number;
    telefone: string;
    descricao: string;
}

export { Aluno, Telefone };

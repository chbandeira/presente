import { Telefone } from "../../telefones/telefone/telefone.model";

export class Responsavel {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    email2: string;
    telefones: Telefone[];
    enviarEmail: boolean;
    enviarMensagem: boolean;
}

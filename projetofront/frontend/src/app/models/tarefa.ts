import { Comentario } from "./comentario";

export interface Tarefa{
    id: any;
    titulo: String;
    dataInicio: any;
    dataFim: any;
    dataEfetiva: any;
    status: String;
    idPessoa: any;
    nomePessoa: String;
    comentarios: Comentario[];
}
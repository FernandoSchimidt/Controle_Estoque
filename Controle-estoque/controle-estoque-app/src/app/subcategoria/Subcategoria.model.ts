import { Categoria } from "../categorias/Categoria.model";

export class SubCategoria {
    id!: number;
    scat_nome: string;
    categoria: Categoria


    constructor(scat_nome: string, categoria: Categoria) {
        this.scat_nome = scat_nome;
        this.categoria = categoria
    }

}
import { Categoria } from "../categorias/Categoria.model";

export class SubCategoria {
    id!: number;
    scat_nome: string;
    cat_cod: Categoria


    constructor(scat_nome: string, cat_cod: Categoria) {
        this.scat_nome = scat_nome;
        this.cat_cod = cat_cod
    }

}
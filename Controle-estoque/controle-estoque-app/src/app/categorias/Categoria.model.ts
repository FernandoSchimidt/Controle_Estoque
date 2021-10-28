export class Categoria {
    id!: number;
    cat_nome: string;

    constructor(cat_nome: string) {
        this.cat_nome = cat_nome;
    }

}
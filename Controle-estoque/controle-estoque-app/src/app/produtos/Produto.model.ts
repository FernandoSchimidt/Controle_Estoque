import { Categoria } from "../categorias/Categoria.model";
import { SubCategoria } from "../subcategoria/Subcategoria.model";
import { UndMedida } from "../und-medida/components/UndMedida.model";

export class Produto {
    id!: number;
    pro_nome: string;
    pro_descricao: string;
    pro_valorpago: number;
    pro_valorvenda: number;
    pro_qtde: number;
    undmedida: UndMedida;
    categoria: Categoria;
    subCategoria: SubCategoria;

    constructor(
        pro_nome: string,
        pro_descricao: string,
        pro_valorpago: number,
        pro_valorvenda: number,
        pro_qtde: number,
        undmedida: UndMedida,
        categoria: Categoria,
        subCategoria: SubCategoria

    ) {
        this.pro_nome = pro_nome;
        this.pro_descricao = pro_descricao;
        this.pro_valorpago = pro_valorpago;
        this.pro_valorvenda = pro_valorvenda;
        this.pro_qtde = pro_qtde;
        this.undmedida = undmedida;
        this.categoria = categoria;
        this.subCategoria = subCategoria;
    }
}
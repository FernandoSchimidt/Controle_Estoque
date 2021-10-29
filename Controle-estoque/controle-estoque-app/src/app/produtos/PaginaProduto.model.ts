import { Produto } from "./Produto.model";

export class PaginaProduto {
    content!: Produto[];
    totalElements!: number;
    size!: number;
    number!: number;
}
import { Fornecedor } from "./Fornecedor.model";

export class PaginaFornecedor {
    content!: Fornecedor[];
    totalElements!: number;
    size!: number;
    number!: number;
}
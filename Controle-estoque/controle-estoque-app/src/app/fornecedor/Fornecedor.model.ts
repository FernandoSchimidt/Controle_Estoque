export class Fornecedor {
    id!: number;
    for_nome: string;
    for_rsocial: string;
    for_ie: string;
    for_cnpj: string;
    for_cep: string;
    for_endereco: string;
    for_bairro: string;
    for_fone: string;
    for_cel: string;
    for_email: string;
    for_endnumero: string;
    for_cidade: string;
    for_estado: string;

    constructor(for_nome: string,
        for_rsocial: string,
        for_ie: string,
        for_cnpj: string,
        for_cep: string,
        for_endereco: string,
        for_bairro: string,
        for_fone: string,
        for_cel: string,
        for_email: string,
        for_endnumero: string,
        for_cidade: string,
        for_estado: string) {

        this.for_nome = for_nome;
        this.for_rsocial = for_rsocial;
        this.for_ie = for_ie;
        this.for_cnpj = for_cnpj;
        this.for_cep = for_cep;
        this.for_endereco = for_endereco;
        this.for_bairro = for_bairro;
        this.for_fone = for_fone;
        this.for_cel = for_cel;
        this.for_email = for_email;
        this.for_endnumero = for_endnumero;
        this.for_cidade = for_cidade;
        this.for_estado = for_estado;

    }

}
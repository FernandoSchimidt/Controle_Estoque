export class Cliente {
    id!: number;
    cli_nome: string;
    cli_cpfcnpj: string;
    cli_rgie: string;
    cli_rsocial: string;
    cli_tipo: string;
    cli_cep: string;
    cli_endereco: string;
    cli_bairro: string;
    cli_fone: string;
    cli_cel: string;
    cli_email: string;
    cli_endnumero: string;
    cli_cidade: string;
    cli_estado: string;

    constructor(
        cli_nome: string,
        cli_cpfcnpj: string,
        cli_rgie: string,
        cli_rsocial: string,
        cli_tipo: string,
        cli_cep: string,
        cli_endereco: string,
        cli_bairro: string,
        cli_fone: string,
        cli_cel: string,
        cli_email: string,
        cli_endnumero: string,
        cli_cidade: string,
        cli_estado: string) {
        this.cli_nome = cli_nome;
        this.cli_cpfcnpj = cli_cpfcnpj;
        this.cli_rgie = cli_rgie;
        this.cli_rsocial = cli_rsocial;
        this.cli_tipo = cli_tipo;
        this.cli_cep = cli_cep;
        this.cli_endereco = cli_endereco;
        this.cli_bairro = cli_bairro;
        this.cli_fone = cli_fone;
        this.cli_cel = cli_cel;
        this.cli_email = cli_email;
        this.cli_endnumero = cli_endnumero;
        this.cli_cidade = cli_cidade;
        this.cli_estado = cli_estado;

    }
}


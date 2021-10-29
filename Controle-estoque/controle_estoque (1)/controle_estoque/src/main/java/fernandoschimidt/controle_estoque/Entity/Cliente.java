package fernandoschimidt.controle_estoque.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 95)
    private String cli_nome;

    @Column(length = 95)
    private String cli_cpfcnpj;

    @Column(length = 95)
    private String cli_rgie;

    @Column(length = 95)
    private String cli_rsocial;

    @Column(length = 20)
    private String cli_tipo;

    @Column(length = 20)
    private String cli_cep;

    @Column(length = 95)
    private String cli_endereco;

    @Column(length = 95)
    private String cli_bairro;

    @Column(length = 95)
    private String cli_fone;

    @Column(length = 95)
    private String cli_cel;

    @Column(length = 95)
    private String cli_email;

    @Column(length = 10)
    private String cli_endnumero;

    @Column(length = 18)
    private String cli_cidade;

    @Column(length = 18)
    private String cli_estado;

}

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
public class Fornecedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 95)
    private String for_nome;

    @Column(length = 95)
    private String for_rsocial;

    @Column(length = 95)
    private String for_ie;

    @Column(length = 95)
    private String for_cnpj;

    @Column(length = 95)
    private String for_cep;

    @Column(length = 95)
    private String for_endereco;

    @Column(length = 95)
    private String for_bairro;

    @Column(length = 95)
    private String for_fone;

    @Column(length = 95)
    private String for_cel;

    @Column(length = 95)
    private String for_email;

    @Column(length = 95)
    private String for_endnumero;

    @Column(length = 95)
    private String for_cidade;

    @Column(length = 95)
    private String for_estado;
}

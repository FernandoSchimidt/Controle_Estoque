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
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 95)
    private String pro_nome;

    @Column()
    private String pro_descricao;

    @Column()
    private Double pro_valorpago;

    @Column()
    private Double pro_valorvenda;

    @Column()
    private Double pro_qtde;

    @Column()
    private Integer umed_cod;


    @Column()
    private Integer cat_cod;

    @Column()
    private Integer scat_cod;
}

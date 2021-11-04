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
    private Long id;

    @Column(length = 95)
    private String pro_nome;

    @Column(length = 500)
    private String pro_descricao;

    @Column()
    private Double pro_valorpago;

    @Column()
    private Double pro_valorvenda;

    @Column()
    private Double pro_qtde;

    @ManyToOne()
    @JoinColumn(name = "id_undmedida", nullable = false)
    private Undmedida undmedida;


    @ManyToOne()
    @JoinColumn(name = "id_cat", nullable = false)
    private Categoria categoria;

    @ManyToOne()
    @JoinColumn(name = "id_scat", nullable = false)
    private SubCategoria subCategoria;


}

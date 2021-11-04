package fernandoschimidt.controle_estoque.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Venda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Date ven_data;

    @Column
    private Integer ven_nfiscal;

    @Column
    private Double ven_total;

    @Column
    private Integer ven_nparcelas;

    @Column
    private String ven_status;

    @ManyToOne()
    @JoinColumn(name = "id_cli", nullable = false)
    private Cliente cliente;

    @ManyToOne()
    @JoinColumn(name = "id_tpa", nullable = false)
    private TipoPagamento tipoPagamento;

    @Column
    private Integer ven_avista;

}

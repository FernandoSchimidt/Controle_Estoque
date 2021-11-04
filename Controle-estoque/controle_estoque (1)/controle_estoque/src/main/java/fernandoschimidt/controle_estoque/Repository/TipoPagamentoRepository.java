package fernandoschimidt.controle_estoque.Repository;

import fernandoschimidt.controle_estoque.Entity.TipoPagamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoPagamentoRepository extends JpaRepository<TipoPagamento, Long> {
}

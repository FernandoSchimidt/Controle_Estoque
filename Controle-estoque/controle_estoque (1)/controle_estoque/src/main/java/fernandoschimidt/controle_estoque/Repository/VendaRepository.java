package fernandoschimidt.controle_estoque.Repository;

import fernandoschimidt.controle_estoque.Entity.Venda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaRepository extends JpaRepository<Venda, Long> {
}

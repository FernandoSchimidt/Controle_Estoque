package fernandoschimidt.controle_estoque.Repository;

import fernandoschimidt.controle_estoque.Entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}

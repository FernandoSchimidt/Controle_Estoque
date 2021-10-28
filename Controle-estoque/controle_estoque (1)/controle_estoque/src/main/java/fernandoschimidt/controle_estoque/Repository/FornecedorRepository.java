package fernandoschimidt.controle_estoque.Repository;

import fernandoschimidt.controle_estoque.Entity.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Integer> {
}

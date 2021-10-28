package fernandoschimidt.controle_estoque.Repository;

import fernandoschimidt.controle_estoque.Entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}

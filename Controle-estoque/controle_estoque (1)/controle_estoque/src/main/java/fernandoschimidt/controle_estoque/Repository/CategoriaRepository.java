package fernandoschimidt.controle_estoque.Repository;

import fernandoschimidt.controle_estoque.Entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}

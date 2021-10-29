package fernandoschimidt.controle_estoque.Controllers;

import fernandoschimidt.controle_estoque.Entity.Categoria;
import fernandoschimidt.controle_estoque.Entity.SubCategoria;
import fernandoschimidt.controle_estoque.Entity.Undmedida;
import fernandoschimidt.controle_estoque.Repository.UndmedidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/undmedida")
@CrossOrigin("*")
public class UndmedidaController {

    private UndmedidaRepository undmedidaRepository;

    @Autowired
    public UndmedidaController(UndmedidaRepository undmedidaRepository) {
        this.undmedidaRepository = undmedidaRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Undmedida create(@RequestBody Undmedida undmedida) {
        return undmedidaRepository.save(undmedida);
    }

    @GetMapping
    public Page<Undmedida> list(
            @RequestParam(value = "page", defaultValue = "0") Integer pagina,
            @RequestParam(value = "size", defaultValue = "10") Integer tamanhoPagina
    ) {
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        PageRequest pageRequest = PageRequest.of(pagina, tamanhoPagina, sort);
        return undmedidaRepository.findAll(pageRequest);

    }

    @GetMapping("/all")
    public List<Undmedida> getAll() {
        return undmedidaRepository.findAll();
    }

    @GetMapping("{id}")
    public Undmedida findById(@PathVariable Long id) {
        return undmedidaRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        undmedidaRepository.deleteById(id);
    }

}

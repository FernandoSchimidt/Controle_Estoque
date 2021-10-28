package fernandoschimidt.controle_estoque.Controllers;

import fernandoschimidt.controle_estoque.Entity.Categoria;
import fernandoschimidt.controle_estoque.Entity.SubCategoria;
import fernandoschimidt.controle_estoque.Repository.CategoriaRepository;
import fernandoschimidt.controle_estoque.Repository.SubCategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/subcategoria")
@CrossOrigin("*")
public class SubCategoriaController {
    private SubCategoriaRepository subCategoriaRepository;

    @Autowired
    public SubCategoriaController(SubCategoriaRepository subCategoriaRepository) {
        this.subCategoriaRepository = subCategoriaRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SubCategoria create(@RequestBody SubCategoria subCategoria) {
        return subCategoriaRepository.save(subCategoria);
    }

    @GetMapping
    public Page<SubCategoria> list(
            @RequestParam(value = "page", defaultValue = "0") Integer pagina,
            @RequestParam(value = "size", defaultValue = "10") Integer tamanhoPagina
    ) {
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        PageRequest pageRequest = PageRequest.of(pagina, tamanhoPagina, sort);
        return subCategoriaRepository.findAll(pageRequest);

    }

    @GetMapping("{id}")
    public SubCategoria findById(@PathVariable Integer id) {
        return subCategoriaRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        subCategoriaRepository.deleteById(id);
    }
}
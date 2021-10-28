package fernandoschimidt.controle_estoque.Controllers;

import fernandoschimidt.controle_estoque.Entity.Cliente;
import fernandoschimidt.controle_estoque.Entity.Fornecedor;
import fernandoschimidt.controle_estoque.Repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fornecedor")
@CrossOrigin("*")
public class FornecedorController {

    private FornecedorRepository fornecedorRepository;

    @Autowired
    public FornecedorController(FornecedorRepository fornecedorRepository) {
        this.fornecedorRepository = fornecedorRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Fornecedor create(@RequestBody Fornecedor fornecedor) {
        return fornecedorRepository.save(fornecedor);
    }

    @GetMapping
    public Page<Fornecedor> list(
            @RequestParam(value = "page", defaultValue = "0") Integer pagina,
            @RequestParam(value = "size", defaultValue = "10") Integer tamanhoPagina
    ) {
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        PageRequest pageRequest = PageRequest.of(pagina, tamanhoPagina, sort);
        return fornecedorRepository.findAll(pageRequest);

    }
}

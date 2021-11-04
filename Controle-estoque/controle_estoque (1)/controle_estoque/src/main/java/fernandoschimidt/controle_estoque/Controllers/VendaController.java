package fernandoschimidt.controle_estoque.Controllers;

import fernandoschimidt.controle_estoque.Entity.Undmedida;
import fernandoschimidt.controle_estoque.Entity.Venda;
import fernandoschimidt.controle_estoque.Repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/vendas")
@CrossOrigin("*")
public class VendaController {

    private VendaRepository vendaRepository;

    @Autowired
    public VendaController(VendaRepository vendaRepository) {
        this.vendaRepository = vendaRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Venda create(@RequestBody Venda venda) {
        return vendaRepository.save(venda);
    }

    @GetMapping
    public Page<Venda> list(
            @RequestParam(value = "page", defaultValue = "0") Integer pagina,
            @RequestParam(value = "size", defaultValue = "10") Integer tamanhoPagina
    ) {
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        PageRequest pageRequest = PageRequest.of(pagina, tamanhoPagina, sort);
        return vendaRepository.findAll(pageRequest);

    }

    @GetMapping("/all")
    public List<Venda> getAll() {
        return vendaRepository.findAll();
    }

    @GetMapping("{id}")
    public Venda findById(@PathVariable Long id) {
        return vendaRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        vendaRepository.deleteById(id);
    }


}

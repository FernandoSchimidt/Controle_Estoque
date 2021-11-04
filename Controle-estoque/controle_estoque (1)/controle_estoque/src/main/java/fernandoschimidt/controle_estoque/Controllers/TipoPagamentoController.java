package fernandoschimidt.controle_estoque.Controllers;

import fernandoschimidt.controle_estoque.Entity.Categoria;
import fernandoschimidt.controle_estoque.Entity.TipoPagamento;
import fernandoschimidt.controle_estoque.Repository.TipoPagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/tipopagamento")
@CrossOrigin("*")
public class TipoPagamentoController {

    private TipoPagamentoRepository tipoPagamentoRepository;

    @Autowired
    public TipoPagamentoController(TipoPagamentoRepository tipoPagamentoRepository) {
        this.tipoPagamentoRepository = tipoPagamentoRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TipoPagamento create(@RequestBody TipoPagamento tipoPagamento) {
        return tipoPagamentoRepository.save(tipoPagamento);
    }

    @GetMapping
    public Page<TipoPagamento> list(
            @RequestParam(value = "page", defaultValue = "0") Integer pagina,
            @RequestParam(value = "size", defaultValue = "10") Integer tamanhoPagina
    ) {
        Sort sort = Sort.by(Sort.Direction.ASC, "tpa_nome");
        PageRequest pageRequest = PageRequest.of(pagina, tamanhoPagina, sort);
        return tipoPagamentoRepository.findAll(pageRequest);

    }

    @GetMapping("/all")
    public List<TipoPagamento> getAll() {
        return tipoPagamentoRepository.findAll();
    }

    @GetMapping("{id}")
    public TipoPagamento findById(@PathVariable Long id) {
        return tipoPagamentoRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        tipoPagamentoRepository.deleteById(id);
    }
}
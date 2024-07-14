package tn.esprit.crmassurance.controller;

import tn.esprit.crmassurance.entities.Contract;
import tn.esprit.crmassurance.services.ContractServiceImpl;
import tn.esprit.crmassurance.services.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Contracts")
public class ContractController {
    @Autowired
    private ContractServiceImpl ContractService;
    @GetMapping("/GetContract/{id}")
    public Contract getContractById(@PathVariable Long id) { return ContractService.getContractById(id);}
    @GetMapping("/GetContract")
    public List<Contract> GetAllContracts() {return ContractService.getAllContract() ;}
    @PostMapping("/addContract")
    public Contract createContract(@RequestBody Contract newContract) {return ContractService.createContract (newContract);}
    @PostMapping("/editContract")
    public Contract updateContract(@PathVariable Long id, @RequestBody Contract contract) {
        return ContractService.updateContract(id, contract);
    }
    @DeleteMapping("/deleteContract")
    public void deleteContract(@RequestBody Long id )
    {
        ContractService.deleteContract(id);
    }

}

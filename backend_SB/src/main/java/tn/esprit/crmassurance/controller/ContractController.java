package tn.esprit.crmassurance.controller;

import tn.esprit.crmassurance.entities.Contract;
import tn.esprit.crmassurance.services.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/Contracts")
public class ContractController {


    @Autowired
    private ContractServiceImpl ContractService;

    @GetMapping("/GetContract/{id}")
    public Contract getContractById(@PathVariable Long id)
    {
        return ContractService.getContractById(id);
    }

    @GetMapping("/GetContract")
    public List<Contract> GetAllContracts()
    {
        return ContractService.GetAllContracts();
    }

    @PostMapping("/addContract")
    public Contract createContract(@RequestBody Contract newContract)
    {
        return ContractService.AddNewContract(newContract);
    }

    @PostMapping("/editContract")
    public void updateContract(@RequestBody Contract ct)
    {
        ContractService.UpdateContractDetails(ct);
    }

    @DeleteMapping("/deleteContract")
    public void DeleteContract(@RequestBody Contract ct)
    {
        ContractService.DeleteContract(ct);
    }
}

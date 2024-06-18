package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.Contract;
import tn.esprit.crmassurance.repositories.ContractRepository;

import java.util.List;
import java.util.Optional;


@Service
public class ContractServiceImpl implements IContractService {



    @Autowired
    public ContractRepository contractRepository;


    @Override
    public List<Contract> getAllContract() {
        return contractRepository.findAll();
    }

    @Override

    public Contract getContractById(Long id) { return contractRepository.findById(id).orElse(null);}

    @Override
    public Contract createContract(Contract Newcontract) {
        return contractRepository.save(Newcontract);
    }

    @Override
    public Contract updateContract(Long id, Contract contract) {
        contract.setId(id);
        return contractRepository.save(contract);
    }

    @Override
    public void deleteContract(Long id) {
        contractRepository.deleteById(id);
    }
}

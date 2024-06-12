package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.Contract;
import tn.esprit.crmassurance.repositories.ContractRepository;

import java.util.List;


@Service
public class ContractServiceImpl implements IContractService {



    @Autowired
    public ContractRepository contractRepository;


    @Override
    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }

    @Override
    public Optional<Contract> getContractById(Long id) {
        return contractRepository.findById(id);
    }

    @Override
    public Contract createContract(Contract contract) {
        return contractRepository.save(contract);
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

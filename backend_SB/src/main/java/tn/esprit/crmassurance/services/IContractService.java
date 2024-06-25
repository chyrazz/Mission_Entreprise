package tn.esprit.crmassurance.services;

import tn.esprit.crmassurance.entities.Contract;

import java.util.List;


public interface IContractService {



    public List<Contract> getAllContract();

    public Contract getContractById(Long id);

    public Contract createContract(Contract contract);

    public Contract updateContract(Long id, Contract contract);

    void deleteContract(Long id);

    //test05

}

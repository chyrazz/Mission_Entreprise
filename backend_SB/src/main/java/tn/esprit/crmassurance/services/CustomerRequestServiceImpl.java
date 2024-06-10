package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.CustomerRequest;
import tn.esprit.crmassurance.repositories.CustomerRequestRepository;

import java.util.List;


@Service
public class CustomerRequestServiceImpl implements ICustomerRequestService{

    @Autowired
    private CustomerRequestRepository CRequestRepo;
    @Override
    public CustomerRequest GetCustomerRequestByID(Long id){ return CRequestRepo.findById(id).orElse(null);}

    @Override
    public List<CustomerRequest> GetAllCustomerRequests(){ return CRequestRepo.findAll();}

    @Override
    public CustomerRequest AddNewCustomerRequest(CustomerRequest CR){ return CRequestRepo.save(CR);}

    @Override
    public void UpdateCustomerRequest(CustomerRequest newRequest){
        CRequestRepo.findById(newRequest.getId())
                .ifPresent(CR1 -> {
                    CR1.setDescription(newRequest.getDescription());
                    CR1.setCommentaire(newRequest.getCommentaire());
                    CR1.setCreationDate(newRequest.getCreationDate());
                    CR1.setUpdateDate(newRequest.getUpdateDate());
                    CR1.setType(newRequest.getType());
                    CR1.setStatus(newRequest.getStatus());
                    CR1.setResponsableTicket(newRequest.getResponsableTicket());
                    CR1.setCreatedBy(newRequest.getCreatedBy());

                    CRequestRepo.save(CR1);
                });
    }
}

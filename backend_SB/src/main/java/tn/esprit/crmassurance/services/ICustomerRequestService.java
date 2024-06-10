package tn.esprit.crmassurance.services;
import tn.esprit.crmassurance.entities.CustomerRequest;

import java.util.List;

public interface ICustomerRequestService {

    public CustomerRequest GetCustomerRequestByID(Long id);

    public List<CustomerRequest> GetAllCustomerRequests();

    public CustomerRequest AddNewCustomerRequest(CustomerRequest CR);

    public void UpdateCustomerRequest(CustomerRequest newRequest);
}

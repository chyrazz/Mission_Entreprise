package tn.esprit.crmassurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.crmassurance.entities.CustomerRequest;
import tn.esprit.crmassurance.services.CustomerRequestServiceImpl;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Request")
public class CustomerRequestController {
    @Autowired
    private CustomerRequestServiceImpl CRequestImpl;

    @GetMapping("/GetRequest/{id}")
    public CustomerRequest GetCustomerRequestByID(@PathVariable Long id) {return CRequestImpl.GetCustomerRequestByID(id);}

    @GetMapping("/GetRequests")
    public List<CustomerRequest> GetAllCustomerRequests()
    {
        return CRequestImpl.GetAllCustomerRequests();
    }

    @PostMapping("/addCRequest")
    public CustomerRequest AddNewCustomerRequest(@RequestBody CustomerRequest newRequest) {return CRequestImpl.AddNewCustomerRequest(newRequest);}

    @PostMapping("/UpdateCRequest")
    public void UpdateCustomerRequest(@RequestBody CustomerRequest CRequest) {CRequestImpl.UpdateCustomerRequest(CRequest);}
}

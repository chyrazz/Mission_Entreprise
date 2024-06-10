package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.CustomerRequest;

@Repository
public interface CustomerRequestRepository extends JpaRepository<CustomerRequest,Long> {
}

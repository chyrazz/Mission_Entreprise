package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.CustomerRequest;
import tn.esprit.crmassurance.entities.ERequestStatus;
import tn.esprit.crmassurance.entities.ETypeOpportunity;
import tn.esprit.crmassurance.entities.ETypeRequest;

import java.util.List;

@Repository
public interface CustomerRequestRepository extends JpaRepository<CustomerRequest,Long> {

    public long countByStatus(ERequestStatus status);
    public long countByType(ETypeRequest type);
}

package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.CustomerRequest;
import tn.esprit.crmassurance.entities.ERequestStatus;
import tn.esprit.crmassurance.entities.ETypeRequest;

import java.util.List;

@Repository
public interface CustomerRequestRepository extends JpaRepository<CustomerRequest,Long> {
    List<CustomerRequest> findByStatus(ERequestStatus status);

    List<CustomerRequest> findByTypeIn(List<ETypeRequest> list);
}

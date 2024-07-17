package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.ERole;
import tn.esprit.crmassurance.entities.ETypeOpportunity;
import tn.esprit.crmassurance.entities.Opportunity;
@Repository
public interface OpporunityRepository extends JpaRepository<Opportunity,Long> {

    public long countByOpp(ETypeOpportunity opp);

    @Query("SELECT COUNT(o) FROM Opportunity o WHERE o.representant.role = tn.esprit.crmassurance.entities.ERole.Commerciale")
    long countOpportunitiesByCommercial();

}

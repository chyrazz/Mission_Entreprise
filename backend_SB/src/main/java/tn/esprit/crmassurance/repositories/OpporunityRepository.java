package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.Opportunity;
@Repository
public interface OpporunityRepository extends JpaRepository<Opportunity,Long> {
}

package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.ERole;
import tn.esprit.crmassurance.entities.User;

import java.util.List;

@Repository
public interface LeadRepository extends JpaRepository<User,Long> {

    public List<User> findAllByRole(ERole r);
}

package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.crmassurance.entities.Role;
import tn.esprit.crmassurance.entities.test;

public interface RoleRepository extends JpaRepository<test,Long> {
}

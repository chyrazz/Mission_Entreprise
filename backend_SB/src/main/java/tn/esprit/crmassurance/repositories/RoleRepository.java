package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.crmassurance.entities.Role;

public interface RoleRepository extends JpaRepository<Role,Long> {
}

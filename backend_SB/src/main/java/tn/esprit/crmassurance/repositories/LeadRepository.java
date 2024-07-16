package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.ECausesDisqualified;
import tn.esprit.crmassurance.entities.ERole;
import tn.esprit.crmassurance.entities.EUserStatus;
import tn.esprit.crmassurance.entities.User;

import java.util.List;

@Repository
public interface LeadRepository extends JpaRepository<User,Long> {

    public List<User> findAllByRole(ERole r);

    public long countByRole(ERole r);
    public long countByRoleAndStatus(ERole r, EUserStatus status);
    public long countByRoleAndStatusAndCause(ERole r, EUserStatus status, ECausesDisqualified ed);

    @Query("SELECT COUNT(u) FROM User u WHERE u.conversion = true")
    long countConvertedClients();

    @Query("SELECT COUNT(u) FROM User u WHERE u.conversion = false")
    long countTotalLeads();


}

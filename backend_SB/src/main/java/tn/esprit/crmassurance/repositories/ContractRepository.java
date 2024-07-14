package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.Contract;
import tn.esprit.crmassurance.entities.ERole;

import java.sql.Date;
import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract,Long> {
/*
    List<Contract> findByEndDateBetween(Date date, Date date1);

    List<Contract> findByStartDateBetween(Date date, Date date1);

    @Query("SELECT c FROM Contract c WHERE c.representant.role = 'Commerciale'")
    List<Contract> findByRepresentantCommercial();
*/

    @Query("SELECT COUNT(c) FROM Contract c WHERE c.EndDate <= CURRENT_DATE")
    long countTerminatedContracts();

    @Query("SELECT COUNT(c) FROM Contract c WHERE c.EndDate > CURRENT_DATE")
    long countPendingContracts();
}

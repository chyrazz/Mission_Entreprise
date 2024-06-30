package tn.esprit.crmassurance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.Contract;

import java.sql.Date;
import java.util.List;

@Repository
public interface ContractRepository extends JpaRepository<Contract,Long> {
    List<Contract> findByEndDateBetween(Date date, Date date1);

    List<Contract> findByStartDateBetween(Date date, Date date1);

    @Query("SELECT c FROM Contract c WHERE c.representant.role.name = 'Commerciale'")
    List<Contract> findByRepresentantCommercial();


    //test05
}

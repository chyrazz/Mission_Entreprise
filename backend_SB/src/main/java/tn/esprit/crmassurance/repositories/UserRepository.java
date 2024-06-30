
package tn.esprit.crmassurance.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.crmassurance.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

   User findFirstByEmail(String email);
 /*  @Query("SELECT u FROM User u WHERE u.email = :email")
   User findByEmailJPQL(String email);*/
}

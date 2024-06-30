package tn.esprit.crmassurance.services;

import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.dto.SignupDTO;
import tn.esprit.crmassurance.dto.UserDTO;
import tn.esprit.crmassurance.entities.User;

import java.util.List;

@Service
public interface UserService {
    UserDTO createUser(SignupDTO signupDTO);
    boolean hasUserWithEmail(String email);
   public  List<User> getAllUsers();
  /*  public void changePassword(User User);
    public void forgotPassword(String mail);*/

}

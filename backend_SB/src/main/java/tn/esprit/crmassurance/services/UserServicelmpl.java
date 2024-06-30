package tn.esprit.crmassurance.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.dto.SignupDTO;
import tn.esprit.crmassurance.dto.UserDTO;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.repositories.UserRepository;
import tn.esprit.crmassurance.utils.EmailService;

import java.util.List;

@Service
@AllArgsConstructor

public class UserServicelmpl implements UserService {


    @Autowired
    private UserRepository userRepository;
    EmailService emailService;
    @Override
    public UserDTO createUser(SignupDTO signupDTO) {
        User user = new User();
        user.setName(signupDTO.getName());
        user.setEmail(signupDTO.getEmail());
        user.setRole(signupDTO.getRole());
        user.setPassword(new BCryptPasswordEncoder().encode(signupDTO.getPassword()));
        User createdUser = userRepository.save(user);
        UserDTO userDTO = new UserDTO();
        userDTO.setId(createdUser.getId());
        userDTO.setName(createdUser.getName());
        userDTO.setEmail(createdUser.getEmail());
        userDTO.setRole(createdUser.getRole());
        return userDTO;
    }
    
    @Override
    public boolean hasUserWithEmail(String email) {
        return userRepository.findFirstByEmail(email) != null ;
    }

    @Override
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }
/*
    @Override
    public void changePassword(User User) {
        User user = findUserByEmail(User.getEmail());
        if (!user.isHasRequestedPasswordChange()) {
            System.out.println("calling mail service");
            user.setPasswordResetToken("new token");
            Calendar calendar = Calendar.getInstance();
            Date now = calendar.getTime();
            calendar.add(Calendar.HOUR_OF_DAY, 1);
            Date expiration = calendar.getTime();
            System.out.println(expiration);
            user.setPasswordResetExpires(expiration);


            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(user.getEmail());
            mailMessage.setSubject("Complete Registration!");
            mailMessage.setFrom("hamdouni.yessine13@gmail.com");
            mailMessage.setText("To confirm your account, please click here : "
                    + "http://localhost:9000/Users/listusers" + "token");

            emailService.sendEmail(mailMessage);

        }
    }

    public void forgotPassword(String mail){
        User user = findUserByEmail(mail);

           if (!user.isHasRequestedPasswordChange()) {
                changePassword(user);
            }


    }

    public User findUserByEmail(String email) {
        return UserRepository.findByEmailJPQL(email);
    }




*/

}


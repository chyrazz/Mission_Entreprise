
package tn.esprit.crmassurance.utils;

import com.example.finale.entities.User;
import com.example.finale.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

@Autowired
private UserRepository userRepository;
    EmailService emailService;
        @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
            com.example.finale.entities.User user = userRepository.findFirstByEmail(email) ;
            if (user == null) throw new UsernameNotFoundException("Username not found" , null) ;
            return  new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(), new ArrayList<>());

        }





    }



package tn.esprit.crmassurance.dto;

import lombok.Data;
import tn.esprit.crmassurance.entities.ERole;

@Data
public class UserDTO {



    private Long id;

    private String name;
    private String email;
    private String password;

    private ERole role;



}

package tn.esprit.crmassurance.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long RoleId;


    @Enumerated(EnumType.STRING)
    private ERole name;

    @OneToMany(mappedBy = "role")
    private List<User> listeUsers;
}

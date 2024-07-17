package tn.esprit.crmassurance.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Role {
 @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long RoleId;
    @Enumerated(EnumType.STRING)
    private ERole name;

}

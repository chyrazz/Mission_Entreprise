package tn.esprit.crmassurance.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String LastName;
    private String email;
    private String password;
    private String phoneNumber1;
    private String phoneNumber2;
    private String Adress;
    private Date InscripDate;

    @Enumerated(EnumType.STRING)
    private EUserStatus status;

    @ManyToOne
    private Role role;

    @OneToMany(mappedBy = "representant")
    private List<Opportunity> lisOPPAsRep;

    @OneToMany(mappedBy = "lead")
    private List<Opportunity> lisOPPAsLead;

    @OneToMany(mappedBy = "CreatedBy")
    private List<CustomerRequest> listTicketsAsClient;

    @OneToMany(mappedBy = "ResponsableTicket")
    private List<CustomerRequest> listTicketsAsSupport;

    @OneToMany(mappedBy = "repAct")
    private List<Activity> ActivityAsRep;

    @OneToMany(mappedBy = "lead")
    private List<Activity> ActivityAsLead;

    @OneToMany(mappedBy = "representant")
    private List<Contract> ContratsAsRep;

    @OneToMany(mappedBy = "client")
    private List<Contract> ContratsAsClient;

}

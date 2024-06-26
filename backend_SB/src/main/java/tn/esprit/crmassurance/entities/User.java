package tn.esprit.crmassurance.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String lastname;
    private String adr;
    private String email;
    private String password;
    private String phoneNumber1;
    private String phoneNumber2;
    private Date creationdate;

    @OneToMany(mappedBy ="userCreateur" )
    private List<User> usercrees;

    @ManyToOne
    private User userCreateur;

    @Enumerated(EnumType.STRING)
    private EUserStatus status;

    @Enumerated(EnumType.STRING)
    private ERole role;

    @OneToMany(mappedBy = "representant",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Opportunity> lisOPPAsRep;

    @OneToMany(mappedBy = "lead",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Opportunity> lisOPPAsLead;

    @OneToMany(mappedBy = "CreatedBy",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CustomerRequest> listTicketsAsClient;

    @OneToMany(mappedBy = "ResponsableTicket",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<CustomerRequest> listTicketsAsSupport;

    @OneToMany(mappedBy = "repAct",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Activity> ActivityAsRep;

    @OneToMany(mappedBy = "lead",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Activity> ActivityAsLead;

    @OneToMany(mappedBy = "representant", cascade = CascadeType.ALL)
    private List<Contract> ContratsAsRep;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Contract> ContratsAsClient;

}

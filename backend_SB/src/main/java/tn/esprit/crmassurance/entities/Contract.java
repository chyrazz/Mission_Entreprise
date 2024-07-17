package tn.esprit.crmassurance.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Contract implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date StartDate;
    private Date EndDate;

    private float montant;

    private String couverts;
    private String modeDePaiement;
    private String clauseParticuliers;
    private String Remarques;

    /*@ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private User client;

    @ManyToOne
    @JoinColumn(name = "representant_id", nullable = false)
    private User representant;

    //test05*/
}


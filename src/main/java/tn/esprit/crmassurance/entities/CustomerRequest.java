package tn.esprit.crmassurance.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class CustomerRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ETypeRequest type;

    @Enumerated(EnumType.STRING)
    private ERequestStatus status;

    private String description;
    private String commentaire;
    private Date CreationDate;
    private Date UpdateDate;

    @ManyToOne
    @JoinColumn(name = "representant_id", nullable = false)
    private User ResponsableTicket;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private User CreatedBy;
}


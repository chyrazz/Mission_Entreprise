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
public class CustomerRequest implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String title;

    @Enumerated(EnumType.STRING)
    private ETypeRequest type;

    @Enumerated(EnumType.STRING)
    private ERequestStatus status;

    @Enumerated(EnumType.STRING)
    private ERequestCriticity criticity;

    private String description;
    private Date creationDate;
    private Date updateDate;

    @ManyToOne
    @JoinColumn(name = "representant_id", nullable = true)
    private User responsableTicket;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private User createdBy;
}


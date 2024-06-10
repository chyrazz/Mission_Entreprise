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
public class Opportunity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String opp_name;
    private String description;
    private Date createdDate;
    private Date closeDate;

    @Lob
    private byte[] Attachment;

    @ManyToOne
    @JoinColumn(name = "representant_id", nullable = false)
    private User representant;

    @ManyToOne
    @JoinColumn(name = "lead_id", nullable = false)
    private User lead;
}
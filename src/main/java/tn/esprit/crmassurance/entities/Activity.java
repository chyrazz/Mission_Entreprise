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
public class Activity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date ExchangeDate;
    private String information;

    @Enumerated(EnumType.STRING)
    private EActionAct action;

    @ManyToOne
    @JoinColumn(name = "lead_id", nullable = false)
    private User lead;

    @ManyToOne
    @JoinColumn(name = "representant_id", nullable = false)
    private User repAct;
}
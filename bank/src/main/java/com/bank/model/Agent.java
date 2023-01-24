package com.bank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Entity
public class Agent extends User {

    @OneToMany(mappedBy = "agent")
    @JsonIgnore
    private List<Compte> comptes;

    public Agent(String username, String email, String password, UserRole userRole) {
        super(username, email, password, userRole);
    }


}

package com.bank.model;

<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonIgnore;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Entity
public class Agent extends User {

<<<<<<< HEAD

    @OneToMany(mappedBy = "agent")
=======
    @OneToMany(mappedBy = "agent")
    @JsonIgnore
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
    private List<Compte> comptes;

    public Agent(String username, String email, String password, UserRole userRole) {
        super(username, email, password, userRole);
    }


}

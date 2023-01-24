package com.bank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data

public class Client extends User {
    private String CIN;
    @Lob
    private byte[] image;
    private String telephone;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JsonIgnore
    @JsonProperty("compte")
    private Compte compte;
    private Boolean locked = false;
    private Boolean enabled = false;

    public Client(String username, String email, String password, UserRole userRole, String CIN,byte[] image, String telephone) {
        super(username, email, password, userRole);
        this.image = image;
        this.CIN = CIN;
        this.telephone = telephone;
    }


}


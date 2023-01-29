package com.bank.model;

import jakarta.persistence.*;
import lombok.*;
<<<<<<< HEAD

=======
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
<<<<<<< HEAD
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

=======
import java.util.Collection;
import java.util.Collections;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

@Data
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

public abstract class User implements UserDetails, Serializable {
    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Long id;
    private String username;
    private String email;
    private String password;

    @NonNull
    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    private Boolean locked = false;
    private Boolean enabled = true;

<<<<<<< HEAD
    @Transient
    private List<GrantedAuthority> grantedAuthorityList;


=======
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
    public User(String username, String email, String password, UserRole userRole) {
        this.username = username;
        this.email = email;
        this.password = password;
<<<<<<< HEAD
        this.userRole = userRole;
        this.grantedAuthorityList.add(new SimpleGrantedAuthority(userRole.toString()));

=======
       this.userRole = userRole;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(getUserRole().name());
        return Collections.singletonList(simpleGrantedAuthority);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

<<<<<<< HEAD
}

=======


}
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

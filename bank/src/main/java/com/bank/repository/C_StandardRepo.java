package com.bank.repository;

import com.bank.model.Agent;
import com.bank.model.C_Standard;
import com.bank.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

=======
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface C_StandardRepo extends JpaRepository<C_Standard, Long> {
<<<<<<< HEAD
    Optional<Client> findClientById(Long client_id);
=======
//    @Query("FROM C_Standard s where client = ?1")
    List<C_Standard> findByClient(Client client);
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

    C_Standard findCStandardById(Long id);
}

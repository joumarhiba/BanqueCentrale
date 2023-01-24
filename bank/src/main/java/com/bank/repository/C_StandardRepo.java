package com.bank.repository;

import com.bank.model.Agent;
import com.bank.model.C_Standard;
import com.bank.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface C_StandardRepo extends JpaRepository<C_Standard, Long> {
//    @Query("FROM C_Standard s where client = ?1")
    List<C_Standard> findByClient(Client client);

    C_Standard findCStandardById(Long id);
}

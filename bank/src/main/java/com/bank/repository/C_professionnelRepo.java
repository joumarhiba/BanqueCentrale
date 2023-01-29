package com.bank.repository;

import com.bank.model.C_Professionnel;

import com.bank.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional(readOnly = true)

public interface C_professionnelRepo extends JpaRepository<C_Professionnel, Long> {

    List<C_Professionnel> findByClient(Client client);
    C_Professionnel findCProfessionnelById(Long id);
}

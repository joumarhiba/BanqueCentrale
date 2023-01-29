package com.bank.repository;

import com.bank.model.Carte;
import com.bank.model.C_Standard;
import com.bank.model.Carte;
import com.bank.model.Compte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Repository
@Transactional(readOnly = true)

public interface CarteRepo extends JpaRepository<Carte, Long> {


//    List<C_Standard> findCarteByC_Standard(C_Standard c_standard);


}

package com.bank.repository;

<<<<<<< HEAD
import com.bank.model.Carte;
=======
import com.bank.model.C_Standard;
import com.bank.model.Carte;
import com.bank.model.Compte;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
@Repository
@Transactional(readOnly = true)

public interface CarteRepo extends JpaRepository<Carte, Long> {

<<<<<<< HEAD
=======
//    List<C_Standard> findCarteByC_Standard(C_Standard c_standard);

>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
}

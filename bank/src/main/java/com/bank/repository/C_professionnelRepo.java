package com.bank.repository;

import com.bank.model.C_Professionnel;
import com.bank.model.C_Standard;
<<<<<<< HEAD
=======
import com.bank.model.Client;
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

public interface C_professionnelRepo extends JpaRepository<C_Professionnel, Long> {
<<<<<<< HEAD
=======
    List<C_Professionnel> findByClient(Client client);

>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
    C_Professionnel findCProfessionnelById(Long id);
}

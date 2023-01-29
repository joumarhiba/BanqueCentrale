package com.bank.service;

import com.bank.model.Agent;
import com.bank.model.C_Professionnel;
import com.bank.model.C_Standard;
<<<<<<< HEAD
=======
import com.bank.model.Client;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import com.bank.repository.C_StandardRepo;
import com.bank.repository.C_professionnelRepo;
import com.bank.repository.ClientRepo;
import com.bank.service.helpers.CompteRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.Random;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional

public class C_ProfessionnelServiceImpl implements CompteService{
    private final C_professionnelRepo c_professionnelRepo;

    public List<C_Professionnel> getAllProfessionnels(){
       return c_professionnelRepo.findAll();
    }

   // private final C_Professionnel c_professionnel;

<<<<<<< HEAD
    public String addCompteByClient(C_Professionnel professionnel) throws Exception {

        c_professionnelRepo.save(professionnel);
        log.info("an account is adding by {} ", professionnel.getClient().getUsername());
        return "the account is added successfully";
    }

    public String saveAccount(CompteRequest request) throws Exception {
      /*  boolean ClientExists = c_standardRepo.findClientById(request.getClient_id().getId()).isPresent();
        if(!ClientExists){
            throw new Exception("this id client "+request.getClient_id().getId()+" not found !!!!!");
        }

       */
        if(request.getType().equalsIgnoreCase("Professionnel")){
            try {

                addCompteByClient(
=======
    public List<C_Professionnel> getCStandardsByClient(Client client) {
        return c_professionnelRepo.findByClient(client);
    }

    public C_Professionnel addCompteByClient(C_Professionnel professionnel) throws Exception {
        Random random = new Random();
        long numC = 100000000L + (long)(random.nextDouble()*900000000L);
        professionnel.setNumC(numC);
        return c_professionnelRepo.save(professionnel);

    }

    public C_Professionnel saveAccount(CompteRequest request) throws Exception {
        if(request.getType().equalsIgnoreCase("Professionnel")){
            try {

                var compte = addCompteByClient(
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
                        new C_Professionnel(request.getType(), request.getClient_id(), request.getAgent_id(), request.getNumC())
                );
                // clientRepo.updateCompte(request.getClient_id().getId(),new C_Standard(request.getId(), request.getType(), request.getAmount(), request.getClient_id(), request.getAgent_id()));

<<<<<<< HEAD
                return "it has saved successfully & agent id = "+request.getClient_id();
=======
                return compte;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
            }catch (Exception ex){
                throw new Exception(ex.getMessage());
            }

        } else {
<<<<<<< HEAD
            return "check the type of the account must be Professionnel";
=======
            return null;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
        }
    }



    // depot By Agent !!!!!!!
    public C_Professionnel depotByAgent(C_Professionnel c_professionnel) {
        C_Professionnel existsProfessionnel = c_professionnelRepo.findById(c_professionnel.getId()).orElse(null);
        existsProfessionnel.setAmount(existsProfessionnel.getAmount()+c_professionnel.getAmount());
        return c_professionnelRepo.save(existsProfessionnel);
    }

    // retrait by Client !!!!!!!!!!!!
    @Override
    public Double achatRetrait(Double amount) {
        return null;
    }


    public String retraitByClient(C_Professionnel c_professionnel) {
        C_Professionnel existsProfessionnel = c_professionnelRepo.findById(c_professionnel.getId()).orElse(null);
        if (existsProfessionnel.getAmount() > c_professionnel.getAmount()) {
            existsProfessionnel.setAmount(existsProfessionnel.getAmount() - c_professionnel.getAmount());
            log.info("the old amount {} > new amount {} ", existsProfessionnel.getAmount(), c_professionnel.getAmount());
            c_professionnelRepo.save(existsProfessionnel);
            return "le retrait est bien passé , votre solde actuel est :" + existsProfessionnel.getAmount();
        } else {
            log.info("the old amount {} < new amount {}", existsProfessionnel.getAmount(), c_professionnel.getAmount());
            return "Sorry " + c_professionnel.getAmount() + " est plus grand que votre solde ( " + existsProfessionnel.getAmount() + " )";
        }
    }

    public C_Professionnel getCProfessionnelById(Long id){
        return c_professionnelRepo.findById(id).orElse(null);
    }

    public C_Professionnel updateCProfessionnel(C_Professionnel c_professionnel){
        C_Professionnel existsProfessionnel = c_professionnelRepo.findById(c_professionnel.getId()).orElse(null);
        existsProfessionnel.setEnable(true);
        return c_professionnelRepo.save(existsProfessionnel);
    }

}

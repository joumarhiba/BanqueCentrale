package com.bank.service;

<<<<<<< HEAD
import com.bank.model.Agent;
import com.bank.model.C_Professionnel;
import com.bank.model.C_Standard;
import com.bank.model.Compte;
=======
import com.bank.model.*;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import com.bank.repository.AgentRepo;
import com.bank.repository.C_StandardRepo;
import com.bank.repository.ClientRepo;
import com.bank.service.helpers.CompteRequest;
import com.bank.service.helpers.RegistrationRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.Random;
import java.util.UUID;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional

public class C_StandardServiceImpl implements CompteService{
    private final C_StandardRepo c_standardRepo;
    private final ClientRepo clientRepo;

    public List<C_Standard> getAllStandards(){
        return c_standardRepo.findAll();
    }

<<<<<<< HEAD
    public String addCompteByClient(C_Standard standard) throws Exception {

        c_standardRepo.save(standard);
        log.info("an account is adding by {} ", standard.getClient().getUsername());
        return "the account is added successfully";
    }

    public String saveAccount(CompteRequest request) throws Exception {
=======
    public C_Standard addCompteByClient(C_Standard standard) throws Exception {
        Random random = new Random();
        long numC = 100000000L + (long)(random.nextDouble()*900000000L);
        standard.setNumC(numC);
        return c_standardRepo.save(standard);
    }

    public C_Standard saveAccount(CompteRequest request) throws Exception {
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
      /*  boolean ClientExists = c_standardRepo.findClientById(request.getClient_id().getId()).isPresent();
        if(!ClientExists){
            throw new Exception("this id client "+request.getClient_id().getId()+" not found !!!!!");
        }
       */
        if(request.getType().equalsIgnoreCase("Standard")){
            try {
<<<<<<< HEAD
            addCompteByClient(
                    new C_Standard(request.getType(), request.getClient_id(), request.getAgent_id(), request.getNumC())
            );
               // clientRepo.updateCompte(request.getClient_id().getId(),new C_Standard(request.getId(), request.getType(), request.getAmount(), request.getClient_id(), request.getAgent_id()));
            return "it has saved successfully & agent id = "+request.getClient_id();
=======
            var compte = addCompteByClient(
                    new C_Standard(request.getType(), request.getClient_id(), request.getAgent_id(), request.getNumC())
            );
               // clientRepo.updateCompte(request.getClient_id().getId(),new C_Standard(request.getId(), request.getType(), request.getAmount(), request.getClient_id(), request.getAgent_id()));
            return compte;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
            }catch (Exception ex){
                throw new Exception(ex.getMessage());
            }
        } else {
<<<<<<< HEAD
            return "check the type of the account must be Standard";
=======
            return null;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
        }
    }

    @Override
    public Double achatRetrait(Double amount) {
        return null;
    }


    public C_Standard getCStandardById(Long id){
        return c_standardRepo.findById(id).orElse(null);
    }

<<<<<<< HEAD
=======
    public List<C_Standard> getCStandardsByClient(Client client) {
        return c_standardRepo.findByClient(client);
    }

>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
    public C_Standard updateCStandard(C_Standard c_standard){
        C_Standard existsStandard = c_standardRepo.findById(c_standard.getId()).orElse(null);
        existsStandard.setEnable(true);
        c_standardRepo.save(existsStandard);
        return existsStandard;
    }



    // depot By Agent !!!!!!!
    public C_Standard depotByAgent(C_Standard c_standard) {
        C_Standard existsStandard = c_standardRepo.findById(c_standard.getId()).orElse(null);
        existsStandard.setAmount(existsStandard.getAmount()+c_standard.getAmount());
        return c_standardRepo.save(existsStandard);
    }


    public String retraitByClient(C_Standard c_standard) {
        C_Standard existsStandard = c_standardRepo.findById(c_standard.getId()).orElse(null);
        if(existsStandard.getAmount() > c_standard.getAmount()){
            existsStandard.setAmount(existsStandard.getAmount()-c_standard.getAmount());
            log.info("the old amount {} > new amount {} ", existsStandard.getAmount(), c_standard.getAmount());
            c_standardRepo.save(existsStandard);
            return "le retrait est bien passé , votre solde actuel est :"+existsStandard.getAmount();
        }
        else {
            log.info("the old amount {} < new amount {}", existsStandard.getAmount(), c_standard.getAmount());
            return  "Sorry "+c_standard.getAmount() +" est plus grand que votre solde ( "+existsStandard.getAmount()+" )";
        }
    }
}



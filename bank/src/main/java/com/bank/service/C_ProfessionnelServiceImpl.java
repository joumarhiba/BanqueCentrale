package com.bank.service;

import com.bank.model.Agent;
import com.bank.model.C_Professionnel;
import com.bank.model.C_Standard;
import com.bank.model.Client;
import com.bank.repository.C_StandardRepo;
import com.bank.repository.C_professionnelRepo;
import com.bank.repository.ClientRepo;
import com.bank.service.helpers.CompteRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

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
                        new C_Professionnel(request.getType(), request.getClient_id(), request.getAgent_id(), request.getNumC())
                );
                // clientRepo.updateCompte(request.getClient_id().getId(),new C_Standard(request.getId(), request.getType(), request.getAmount(), request.getClient_id(), request.getAgent_id()));

                return compte;
            }catch (Exception ex){
                throw new Exception(ex.getMessage());
            }

        } else {
            return null;
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

package com.bank.controller;

import com.bank.model.C_Professionnel;
<<<<<<< HEAD
=======
import com.bank.model.C_Standard;
import com.bank.model.Client;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import com.bank.service.C_ProfessionnelServiceImpl;
import com.bank.service.C_StandardServiceImpl;
import com.bank.service.helpers.CompteRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping
@RestController
@RequiredArgsConstructor

public class C_ProfessionnelController {
    private final C_ProfessionnelServiceImpl c_professionnelService;

    @PostMapping("/registration/addCompteProfessionnel")
<<<<<<< HEAD
    public String addCompteProfessionnel(@RequestBody CompteRequest request) throws Exception {
=======
    public C_Professionnel addCompteProfessionnel(@RequestBody CompteRequest request) throws Exception {
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
        return c_professionnelService.saveAccount(request);
    }

    @GetMapping("/registration/getProfessionnel")
    public List<C_Professionnel> getAllProfessionel(){
        return c_professionnelService.getAllProfessionnels();
    }


<<<<<<< HEAD
=======
    @GetMapping("/registration/getProfessionnelsByClient/{client_id}")
    public List<C_Professionnel> getCProfessionnelsByClient(@PathVariable("client_id") Client client){
        return c_professionnelService.getCStandardsByClient(client);
    }

>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

    @PutMapping("/registration/depotAmountProfessionnel")
    public C_Professionnel depotAmountByAgent(@RequestBody C_Professionnel c_professionnel){
        return c_professionnelService.depotByAgent(c_professionnel);
    }

    @PutMapping("/registration/updateCompteProfessionnel")
    public C_Professionnel updateProfessionnel(@RequestBody C_Professionnel c_professionnel){
        return c_professionnelService.updateCProfessionnel(c_professionnel);
    }

    @PutMapping("/registration/retraitAmountProfessionnel")
    public String retraitAmountByClient(@RequestBody C_Professionnel c_professionnel){
        return c_professionnelService.retraitByClient(c_professionnel);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

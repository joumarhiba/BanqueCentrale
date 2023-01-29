package com.bank.controller;

import com.bank.model.C_Professionnel;
import com.bank.model.C_Standard;
import com.bank.model.Carte;
<<<<<<< HEAD
=======
import com.bank.model.Client;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import com.bank.service.C_StandardServiceImpl;
import com.bank.service.CarteService;
import com.bank.service.helpers.CarteRequest;
import com.bank.service.helpers.CompteRequest;
import com.bank.service.helpers.RegistrationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping
@RestController
@RequiredArgsConstructor
public class C_StandardController {
    private final C_StandardServiceImpl c_standardService;
    private final CarteService carteService;

    @PostMapping("/registration/addCompteStandard")
<<<<<<< HEAD
    public String addCompteStandard(@RequestBody CompteRequest request) throws Exception {
        String compte = c_standardService.saveAccount(request);
=======
    public C_Standard addCompteStandard(@RequestBody CompteRequest request) throws Exception {
       C_Standard compte = c_standardService.saveAccount(request);
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
        return compte ;
    }

    @PostMapping("/registration/addCarteVisa")
    public String addCarteVisa(@RequestBody CompteRequest request) throws Exception {
        return carteService.saveCarteVisa(request);
    }

    @GetMapping("/registration/standard/{id}")
    public C_Standard findStandardById(@PathVariable Long id){
        return c_standardService.getCStandardById(id);
    }

     @PutMapping("/registration/updateCompteStandard")
    public C_Standard updateStandard(@RequestBody C_Standard c_standard){
        return c_standardService.updateCStandard(c_standard);
     }

    @GetMapping("/registration/getStandards")
    public List<C_Standard> getAllStandards(){
        return c_standardService.getAllStandards();
    }

<<<<<<< HEAD
=======
    @GetMapping("/registration/getStandardsByClient/{client_id}")
    public List<C_Standard> getCStandardsByClient(@PathVariable("client_id") Client client){
        return c_standardService.getCStandardsByClient(client);
    }


>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
    @PutMapping("/registration/depotAmountStandard")
    public C_Standard depotAmountByAgent(@RequestBody C_Standard c_standard){
        return c_standardService.depotByAgent(c_standard);
    }
    @PutMapping("/registration/retraitAmountStandard")
    public String retraitAmountByClient(@RequestBody C_Standard c_standard){
        return c_standardService.retraitByClient(c_standard);
    }

    @PutMapping("/registration/faireAchat")
    public String faireAchat( @RequestBody Carte carte){
        return carteService.faireAchat(carte);
    }

}



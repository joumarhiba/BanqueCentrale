package com.bank.controller;

import com.bank.model.C_Professionnel;
<<<<<<< HEAD
=======
import com.bank.model.C_Standard;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import com.bank.model.Carte;
import com.bank.model.Compte;
import com.bank.service.CarteService;
import com.bank.service.helpers.CarteProRequest;
import com.bank.service.helpers.CompteRequest;
import lombok.RequiredArgsConstructor;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
=======
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

import java.util.List;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

@RequestMapping
@RestController
@RequiredArgsConstructor

public class CarteController {
    private final CarteService carteService;

    @PostMapping("/registration/addCartePremium")
    public String saveCartePremium(@RequestBody CarteProRequest compteRequest) throws Exception {
        return carteService.saveCartePremium(compteRequest);
    }
<<<<<<< HEAD
=======
//
//    @GetMapping("/registration/getByCStandard/{c_standard}")
//    public List<C_Standard> findCarteByC_Standard(@PathVariable("c_standard") C_Standard c_standard) {
//        return carteService.findCarteByCStandard(c_standard);
//    }
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

}

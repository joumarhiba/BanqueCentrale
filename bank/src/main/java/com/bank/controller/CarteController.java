package com.bank.controller;

import com.bank.model.C_Professionnel;

import com.bank.model.C_Standard;
import com.bank.model.Carte;
import com.bank.model.Compte;
import com.bank.service.CarteService;
import com.bank.service.helpers.CarteProRequest;
import com.bank.service.helpers.CompteRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping
@RestController
@RequiredArgsConstructor

public class CarteController {
    private final CarteService carteService;

    @PostMapping("/registration/addCartePremium")
    public String saveCartePremium(@RequestBody CarteProRequest compteRequest) throws Exception {
        return carteService.saveCartePremium(compteRequest);
    }

//
//    @GetMapping("/registration/getByCStandard/{c_standard}")
//    public List<C_Standard> findCarteByC_Standard(@PathVariable("c_standard") C_Standard c_standard) {
//        return carteService.findCarteByCStandard(c_standard);
//    }

}

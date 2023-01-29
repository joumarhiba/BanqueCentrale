package com.bank.controller;

<<<<<<< HEAD
import com.bank.model.Response;
=======
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import com.bank.model.User;
import com.bank.service.UserServiceImpl;
import com.bank.service.helpers.AuthenticationRequest;
import com.bank.service.helpers.JwtHandler;
<<<<<<< HEAD
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
=======
import lombok.RequiredArgsConstructor;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
<<<<<<< HEAD
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
=======
import org.springframework.web.bind.annotation.*;

import javax.security.auth.login.CredentialNotFoundException;
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserServiceImpl userService;
    private final JwtHandler jwtHandler;

<<<<<<< HEAD
    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/auth/{role}")
    public ResponseEntity<Response> authenticate(
            @PathVariable(required = false) Optional<String> role,
            @RequestBody AuthenticationRequest authenticationRequest
    ) {

        Response response = null;
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getEmail() + ":" + role.orElse("CLIENT"),
=======

    @PostMapping("/registration/auth/{role}")
    public ResponseEntity<String> authenticate(
            @PathVariable String role,
            @RequestBody AuthenticationRequest authenticationRequest
    ) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getEmail() + ":" + role,
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
                            authenticationRequest.getPassword())
            );

            final User user = userService.loadUserByUsername(authenticationRequest.getEmail() + ":" + role);
<<<<<<< HEAD

            if (user != null) {
                String jwt = jwtHandler.generateToken(user);
                response = new Response(
                        HttpStatus.OK,
                        "Successfully Logged  in",
                        "data",
                        jwt
                );
            }

        } catch (AuthenticationException e) {
            e.printStackTrace();
            response = new Response(
                    HttpStatus.BAD_REQUEST,
                    "Failed to log in"
            );
        }
        return new ResponseEntity<>(response, response.getStatus());

    }

=======
            if (user != null) {
                return ResponseEntity.ok(jwtHandler.generateToken(user));
            }

        } catch (Exception e) {
           e.printStackTrace();
           return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body("Error Message");
    }
>>>>>>> dca1a892c5daacedc5c3bdd1567fc84b28e37aff
}

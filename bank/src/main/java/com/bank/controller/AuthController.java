package com.bank.controller;

import com.bank.model.Response;
import com.bank.model.User;
import com.bank.service.UserServiceImpl;
import com.bank.service.helpers.AuthenticationRequest;
import com.bank.service.helpers.JwtHandler;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserServiceImpl userService;
    private final JwtHandler jwtHandler;

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
                            authenticationRequest.getPassword())
            );

            final User user = userService.loadUserByUsername(authenticationRequest.getEmail() + ":" + role);

            if (user != null) {
                String jwt = jwtHandler.generateToken(user);
                response = new Response(
                        HttpStatus.OK,
                        "Successfully Logged in",
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

}

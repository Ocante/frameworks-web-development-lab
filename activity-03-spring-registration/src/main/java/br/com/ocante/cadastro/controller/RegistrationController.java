package br.com.ocante.cadastro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

@Controller
public class RegistrationController {
    @GetMapping("/") public String form() { return "index"; }
    @PostMapping("/cadastrar") public String submit(@RequestParam String nome, @RequestParam String sobrenome, Model model) {
        model.addAttribute("mensagem", "Formulário recebido: " + nome + " " + sobrenome);
        return "index";
    }
}

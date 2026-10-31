package br.com.ocante.frameworkslab.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class HomeController {
    @GetMapping("/") public String home(Model model) {
        model.addAttribute("status", "Tomcat e Spring MVC em funcionamento");
        return "index";
    }
}

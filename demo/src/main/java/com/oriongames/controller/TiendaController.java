package com.oriongames.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.oriongames.repository.ProductoRepository;

@Controller
public class TiendaController {
    @Autowired   // Inyección automática del repositorio de productos
    private ProductoRepository productoRepository;

    @GetMapping("/")
    //El método mostrarCatalogo es el punto de entrada principal de la aplicación.
    public String mostrarCatalogo(Model model) {
        // Añade todos los videojuegos al modelo para que la vista pueda acceder a ellos
        model.addAttribute("videojuegos", productoRepository.findAll());
        return "index"; // se returna la vista index.html
    }
}
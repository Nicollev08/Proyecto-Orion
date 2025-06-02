package com.oriongames.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.oriongames.model.VideoJuego;

@Repository   // Marca esta clase como un repositorio manejado por Spring
public class ProductoRepository {
    // Lista simulada de videojuegos, actuando como una base de datos en memoria
    private List<VideoJuego> videoJuegos = new ArrayList<>();
    
    public ProductoRepository() {
        // Inicializamos con algunos videojuegos
        videoJuegos.add(new VideoJuego(1, "Snake", 20.00, "/IMG/Snake.webp.jpg", "El clásico juego de la serpiente",  "Shooter"));
        videoJuegos.add(new VideoJuego(2, "Halo", 39.00, "/IMG/Halo.jpg", "Juego de disparos en primera persona", "FPS"));
        videoJuegos.add(new VideoJuego(3, "Avatar", 55.00, "/IMG/Avatar.jpg", "Aventura basada en la película", "FPS"));
        videoJuegos.add(new VideoJuego(4, "Mortal Kombat 11", 59.99, "/IMG/Mortal_Kombat_11.jpg", "Juego de lucha","Acción"));
        videoJuegos.add(new VideoJuego(5, "Surviving Mars", 22.00, "/IMG/Surviving_Mars.jpg", "Simulador de colonización de Marte", "Superviviencia"));
        videoJuegos.add(new VideoJuego(6, "Titanfall 2", 45.00, "/IMG/Titanfall_2.jpg", "Shooter con mechas", "Acción"));
    }
    // Devuelve la lista completa de videojuegos
    public List<VideoJuego> findAll() {
        return videoJuegos;
    }
}
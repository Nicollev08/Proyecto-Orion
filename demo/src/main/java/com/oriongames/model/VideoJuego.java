package com.oriongames.model;

public class VideoJuego extends Producto {
    //Atributo
    private String genero;

    // Constructor que inicializa todos los atributos incluyendo los heredados
    public VideoJuego(int id, String nombre, double precio, String imagen, String descripcion, String genero) {
        super(id, nombre, precio, imagen, descripcion);
        this.genero = genero;
    }

    //Método get
    public String getGenero() {
        return genero;
    }
}

// Modal de información del juego
const gameInfoModal = document.getElementById('gameInfoModal');
const closeGameInfoModal = document.getElementById('closeGameInfoModal');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

// Variable para almacenar el juego actual mostrado en el modal
let currentGameInModal = null;

const games = [
    {
        id: 1, //ID único para cada juego
        name: "Snake",
        image: "IMG/Snake.webp.jpg",
        price: 20.00,
        description: "¡Revive el clásico juego Snake! Con nuevos niveles, más desafíos y una jugabilidad fluida.",
    },
    {
        id: 2,
        name: "Halo",
        image: "IMG/halo.jpg",
        price: 39.00,
        description: "Halo es un juego de disparos en primera persona de ciencia ficción. ¡Lucha contra el Covenant y salva la humanidad!",
    },
    {
        id: 3,
        name: "Avatar",
        image: "IMG/Avatar.jpg",
        price: 55.00,
        description: "¡Explora el mundo de Pandora en este juego de aventuras en tercera persona basado en la película Avatar!",
    },
    {
        id: 4,
        name: "Mortal Kombat 11",
        image: "IMG/Mortal_Kombat_11.jpg",
        price: 59.99,
        description: "El mejor juego de peleas de todos los tiempos con nuevos personajes, fatalities, y más.",
    },
    {
        id: 5,
        name: "Surviving Mars",
        image: "IMG/Surviving_Mars.jpg",
        price: 22.00,
        description: "Construye una colonia en Marte. Sobrevive a los peligros del planeta rojo y expande tu base.",
    },
    {
        id: 6,
        name: "Titanfall 2",
        image: "IMG/Titanfall_2.jpg",
        price: 45.00,
        description: "Disparos futuristas, robots gigantes, y acción a alta velocidad. ¡Domina el campo de batalla en este shooter de ciencia ficción!",
    },
];

// Configurar los eventos para los productos
const products = document.querySelectorAll('.product');
products.forEach((product, index) => {
    product.addEventListener('click', (e) => {
        // Si el clic fue en un botón "Agregar al carrito", no hacer nada
        if (e.target.closest('.addToCart')) {
            return;
        }
        
        // Obtener el juego correspondiente
        const game = games[index];
        currentGameInModal = game; // Guardar referencia para el modal

        // Rellenar el modal con los datos del juego
        document.getElementById('gameImage').src = game.image;
        document.getElementById('gameName').textContent = game.name;
        document.getElementById('gamePrice').textContent = `$${game.price.toFixed(2)}`;
        document.getElementById('gameDescription').textContent = game.description;

        // Mostrar el modal
        gameInfoModal.style.display = 'block';
    });
});

// Configurar el botón "Agregar al carrito" del modal
modalAddToCartBtn.addEventListener('click', () => {
    if (currentGameInModal) {
        // Asegúrate que addToCart está disponible globalmente
        if (typeof addToCart === 'function') {
            addToCart({
                id: currentGameInModal.id,
                name: currentGameInModal.name,
                price: currentGameInModal.price,
                image: currentGameInModal.image
            });
            
            // Mostrar notificación (asegúrate que showNotification existe)
            if (typeof showNotification === 'function') {
                showNotification(`${currentGameInModal.name} añadido al carrito`);
            }
        } else {
            console.error('La función addToCart no está definida');
        }
    }
});

// Cerrar el modal
closeGameInfoModal.addEventListener('click', () => {
    gameInfoModal.style.display = 'none';
});

// Cierra el modal si haces clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === gameInfoModal) {
        gameInfoModal.style.display = 'none';
    }
});
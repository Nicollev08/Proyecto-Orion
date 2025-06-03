// Carrito de compras
let cart = [];

// Función para actualizar el carrito en el DOM
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartBtn = document.getElementById('cartBtn');

  // Vaciar lista de productos en el carrito
  cartItems.innerHTML = '';

  let total = 0;

  // Mostrar los productos en el carrito
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" width="50">
        <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
        <button class="remove-item">Eliminar</button>
      </div>
    `;

    // Botón para eliminar producto
    li.querySelector('.remove-item').addEventListener('click', () => {
      removeFromCart(item.id);
    });

    cartItems.appendChild(li);

    // Sumar al total directamente
    total += item.price * item.quantity;
  });

  // Actualizar el DOM con el total
  cartTotal.textContent = total.toFixed(2);

  // Actualizar contador del botón del carrito
  cartBtn.textContent = `Carrito (${cart.reduce((acc, item) => acc + item.quantity, 0)})`;
}

// Función para añadir un producto al carrito
function addToCart(product) {
  // Comprobar si el producto ya está en el carrito
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1; // Si ya está, aumentar la cantidad
  } else {
    // Si no está, añadir al carrito con cantidad 1
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  // Actualizar el carrito en el DOM
  updateCart();
  showCart();

  // Mostrar notificación
  showNotification(`${product.name} añadido al carrito`);
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
  showNotification('Producto eliminado');
}

// Vaciar el carrito
document.getElementById('clearCartBtn')?.addEventListener('click', () => {
  cart = [];
  updateCart();
  showNotification('Carrito vaciado');
});

// Mostrar/ocultar carrito
document.getElementById('cartBtn')?.addEventListener('click', showCart);

function showCart() {
  document.getElementById('cart').classList.add('show');
}

function hideCart() {
  document.getElementById('cart').classList.remove('show');
}

// Cerrar carrito al hacer clic fuera
document.addEventListener('click', (e) => {
  const cartElement = document.getElementById('cart');
  const cartBtn = document.getElementById('cartBtn');

  if (!cartElement.contains(e.target) && e.target !== cartBtn) {
    hideCart();
  }
});

// Mostrar notificación
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 500);
  }, 2000);
}

// Configurar los botones de "Agregar al carrito"
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const product = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image
      };
      addToCart(product);
    });
  });
});
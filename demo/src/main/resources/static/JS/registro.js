// Modal de registro
const registerBtn = document.getElementById('registerBtn');
const registerModal = document.getElementById('registerModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');

// Abre modal de registro
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

// Cierra modal de registro
closeRegisterModal.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

// Cierra el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});
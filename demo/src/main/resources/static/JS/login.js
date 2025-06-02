// login.js
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');

// Abre modal de login
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Cierra modal de login
closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});
// Cierra el modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
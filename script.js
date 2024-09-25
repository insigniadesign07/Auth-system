// Get the elements
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Show login form by default
loginForm.style.display = 'block';

// Event listeners to toggle between forms
loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
});

registerBtn.addEventListener('click', () => {
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
});

function goToPassword() {
  document.getElementById('screen1').classList.remove('active');
  document.getElementById('screen2').classList.add('active');
}

function goToUsername() {
  document.getElementById('screen2').classList.remove('active');
  document.getElementById('screen1').classList.add('active');
}

function togglePassword() {
  const pwd = document.getElementById('password');
  const eye = document.querySelector('.toggle-eye');
  if (pwd.type === "password") {
    pwd.type = "text";
    eye.textContent = "🙈";
  } else {
    pwd.type = "password";
    eye.textContent = "👁️";
  }
}

// Auto-focus username on load
window.onload = () => {
  document.getElementById('username').focus();
};
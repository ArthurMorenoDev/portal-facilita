function login(event) {
  event.preventDefault();

  // Recupera os valores dos campos de email e senha
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Verificar se os campos estão preenchidos
  if (email === '' || password === '') {
    console.log('Preencha todos os campos.');
    alert('Preencha todos os campos.');
    return;
  }

  // Recupera informações do localStorage
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  // Verifica se as informações fornecidas correspondem com as informações salvas
  if (email === storedEmail && password === storedPassword) {
    console.log('Login bem-sucedido!');
    window.location.href = '/dashboard.html';
  } else {
    console.log('Usuário ou senha inválidos.');
    alert('Usuário ou senha inválidos.');
  }
}

document.querySelector('button').addEventListener('click', login);
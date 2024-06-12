function cadastrarUsuario(username,email, password) {
    // Salvando as informações no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }
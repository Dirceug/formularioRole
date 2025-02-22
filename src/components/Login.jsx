import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você faria a lógica de autenticação
    // (ex: verificar no Firebase, API, etc.)

    // Simulação de autenticação
    if (username === 'usuario' && password === 'senha') {
      navigate('/cadastro'); // Redireciona para /cadastro após o login
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Entrar</button>

      {/* Link para a tela de cadastro */}
      <p>Ainda não tem cadastro? <a href="/cadastro">Cadastre-se</a></p>
    </form>
  );
};

export default Login;
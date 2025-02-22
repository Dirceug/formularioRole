// src/components/FormularioCadastro.jsx
import React, { useState } from 'react';
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";

function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "clientes"), {
        nome,
        email,
        telefone,
        cidade,
        cpf,
        senha
      });

      setNome('');
      setEmail('');
      setTelefone('');
      setCidade('')
      setCpf('')
      setSenha('')


      alert('Cliente cadastrado com sucesso!');
    } catch (error) {
      console.error("Erro ao cadastrar cliente: ", error);
      alert('Erro ao cadastrar cliente. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="telefone">Telefone:</label>
      <input type="tel" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        cidade,
        cpf,
        senha
      <label htmlFor="cpf">CPF:</label>
      <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

      <label htmlFor="cidade">Cidade:</label>
      <input type="text" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />

      <label htmlFor="senha">Senha:</label>
      <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioCadastro;
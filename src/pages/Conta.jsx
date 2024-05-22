import React, { useState } from 'react';
import Base from "./Base";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulação de um processo de login
    try {
      // Substitua isso com a chamada de API de autenticação
      const response = await fakeLogin(email, password);
      console.log('Login realizado com sucesso:', response);
      // Redirecione ou faça algo após o login bem-sucedido
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Função de login simulada
  const fakeLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@admin.com' && password === 'admin') {
          resolve({ message: 'Login bem-sucedido!' });
        } else {
          reject(new Error('Credenciais inválidas'));
        }
      }, 1000);
    });
  };

  return (
    <Base>
      <Container>
        <LoginBox>
          <Title>Login</Title>
          <form onSubmit={handleLogin}>
            <Label>Email:</Label>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <Label>Senha:</Label>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Carregando...' : 'Entrar'}
              <Link to="/dadosconta"></Link>
            </Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
        </LoginBox>
      </Container>
    </Base>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f0f2f5;
`;

const LoginBox = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-family: 'Century Gothic', sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-family: 'Century Gothic', sans-serif;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Century Gothic', sans-serif;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--detalhes);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Century Gothic', sans-serif;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Ajuste para cor mais escura */
    transform: scale(1.05); /* Aumenta o botão ligeiramente */
  }

  &:active {
    background-color: #007bff; /* Ajuste para cor mais clara */
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  color: red;
  font-family: 'Century Gothic', sans-serif;
`;

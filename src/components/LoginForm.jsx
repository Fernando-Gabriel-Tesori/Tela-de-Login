import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  background-color: #f0f0f0;
  padding: 2rem;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: form-fade-in 1s ease-in-out;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 24px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: box-shadow 0.3s, border-color 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && email && date && time) {
      console.log('Usuário:', username);
      console.log('Email:', email);
      console.log('Data:', date);
      console.log('Hora:', time);
      alert('Reunião agendada com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Agendar Reunião</Title>
        <FormGroup>
          <Label htmlFor="username">Usuário</Label>
          <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Data</Label>
          <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time">Hora</Label>
          <Input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </FormGroup>
        <Button type="submit">Agendar</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;

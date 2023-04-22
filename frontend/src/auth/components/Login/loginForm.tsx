import React from 'react';
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import './loginForm.styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const username = import.meta.env.VITE_USERNAME_BASIC_AUTH;
  const senha = import.meta.env.VITE_PASSWORD_BASIC_AUTH;
  const basicAuth = 'Basic ' + btoa(username + ':' + senha);

  const params = new URLSearchParams({
    username: email,
    password: password,
    grant_type: 'password'
    
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('http://localhost:8080/oauth/token', params, {
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then((response: any) => {
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/dashboard');
      }).catch((error: any) => {
        console.log(error);
      });
  }

  return (
    <FormControl className='login-container'>
      <form onSubmit={handleSubmit} className='form-login'>
        <Stack spacing={3}>  
          <FormLabel>Email</FormLabel>
          <Input placeholder="Insira seu email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Senha</FormLabel>
          <Input placeholder= "Insira sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button color="brand.500" type="submit">Login</Button>
        </Stack>
      </form>
      <img src="src\assets\spa.png"/>
    </FormControl>
  );
}

export default LoginForm;
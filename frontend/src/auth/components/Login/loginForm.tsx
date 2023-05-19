import React from 'react';
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import styles from './LoginForm.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface props {
  setCookie: (name: "access_token", value: string, options?: any) => void;
}

const LoginForm = ({ setCookie } : props) => {
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
        setCookie('access_token', response.data.access_token, { path: '/', maxAge: response.data.expires_in });
        navigate('/dashboard');
      }).catch((error: any) => {
        console.log(error);
      });
  }

  return (
    <FormControl className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.formLogin}>
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
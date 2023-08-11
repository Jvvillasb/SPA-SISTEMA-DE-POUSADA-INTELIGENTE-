import React from 'react';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react"
import styles from './LoginForm.module.scss';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

interface Props {
  setCookie: (name: string, value: string, options?: any) => void;
}

const LoginForm = ({ setCookie }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [error, setError] = React.useState(false);
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
    axios.post('https://spi-prod.herokuapp.com/oauth/token', params, {
      headers: {
        'Authorization': basicAuth,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((response: AxiosResponse) => {
      console.log(response.data);
      setCookie('access_token', response.data.access_token, { path: '/', maxAge: response.data.expires_in });
      navigate('/dashboard');
    }).catch((error: AxiosError) => {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Usuário ou senha incorretos');
        setError(true);
      } else {
        setErrorMessage('Erro ao fazer login');
        setError(true);
      }
    });
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(false);
    setErrorMessage('');
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError(false);
    setErrorMessage('');
  }

  return (
    <FormControl className={styles.loginContainer} isInvalid={error}>
      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <Stack spacing={3}>
          <FormLabel className={styles.formTitle}>Login</FormLabel>
          <Stack pt={10} pb={10}>
            <Input placeholder="Email" type="email" value={email} onChange={handleEmailChange} />
            <Input placeholder="Senha" type="password" value={password} onChange={handlePasswordChange} />
            {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
            <a href="/">Esqueci a senha?</a>
          </Stack>
          <Button color="white" backgroundColor="blue.500" type="submit" _hover={{ 'background-color': '#4097df' }}>Logar</Button>
          <Stack pt={6} flexDirection='row' alignItems='baseline'>
            <FormLabel color="#9E9E9E">Não tem Cadastro?</FormLabel>
            <a href="/">Cadastrar</a>
          </Stack>
        </Stack>
      </form>
      <img src="src\assets\spa.png" />
    </FormControl>
  );
}

export default LoginForm;

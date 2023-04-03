import React from 'react';
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import './loginForm.styles.css';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para fazer a requisição de autenticação
  }

  return (
    <FormControl className='login-container'>
      <form onSubmit={handleSubmit} className='form-login'>
        <Stack spacing={3}>  
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>Senha</FormLabel>
          <Input placeholder= "Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button color="brand.500" type="submit">Login</Button>
        </Stack>
      </form>
      <img src="src\assets\spa.png"/>
    </FormControl>
  );
}

export default LoginForm;
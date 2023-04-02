import React from 'react';
import { Button } from "@chakra-ui/react"
import './loginForm.styles.css';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para fazer a requisição de autenticação
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='form-login'>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <Button color="brand.500" type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
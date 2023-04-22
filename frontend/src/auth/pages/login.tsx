import React from 'react';
import LoginForm from '../components/Login/loginForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('access_token')) {
      navigate('/home');
    }
  }, [navigate]);

  return (
      <LoginForm />
  );
}

export default Login;
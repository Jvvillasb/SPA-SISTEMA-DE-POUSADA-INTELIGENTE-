import React from 'react';
import LoginForm from '../components/Login/loginForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';	

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['access_token']);
  useEffect(() => {
    const token = cookies.access_token;
    if (token) {
      navigate('/');
    }
  }, [cookies, navigate]);

  return (
      <LoginForm setCookie={setCookie} />
  );
}

export default Login;
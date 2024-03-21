import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
} from '@chakra-ui/react';
import styles from './LoginForm.module.scss';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../commons/ui/Loader/Loader';

interface CookieOptions {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax';
}

interface Props {
    setCookie: (name: string, value: string, options?: CookieOptions) => void;
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
    const [loadingLogin, setLoadingLogin] = useState(Boolean);

    const params = new URLSearchParams({
        username: email,
        password: password,
        grant_type: 'password',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoadingLogin(true);
        axios
            .post('https://spi-prod.herokuapp.com/oauth/token', params, {
                headers: {
                    Authorization: basicAuth,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': 'http://localhost:5173',
                },
            })
            .then((response: AxiosResponse) => {
                setCookie('access_token', response.data.access_token, {
                    path: '/',
                    maxAge: response.data.expires_in,
                });
                setLoadingLogin(false);
                navigate('/home');
            })
            .catch((error: AxiosError) => {
                if (error.response && error.response.status === 400) {
                    setErrorMessage('Usuário ou senha incorretos');
                    setError(true);
                } else {
                    setErrorMessage('Erro ao fazer login');
                    setError(true);
                }
            });
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setError(false);
        setErrorMessage('');
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
        setError(false);
        setErrorMessage('');
    };

    if (loadingLogin) {
        return <Loader message="Fazendo login..."></Loader>;
    }

    return (
        <FormControl className={styles.loginContainer} isInvalid={error}>
            <form onSubmit={handleSubmit} className={styles.formLogin}>
                <Stack spacing={3}>
                    <FormLabel className={styles.formTitle}>Login</FormLabel>
                    <Stack pt={10} pb={10}>
                        <Input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required={true}
                        />
                        <Input
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required={true}
                        />
                        {error && (
                            <FormErrorMessage>{errorMessage}</FormErrorMessage>
                        )}
                    </Stack>
                    <Button
                        color="white"
                        colorScheme="green"
                        type="submit"
                        _hover={{ filter: 'brightness(80%)' }}
                    >
                        Logar
                    </Button>
                </Stack>
            </form>
        </FormControl>
    );
};

export default LoginForm;

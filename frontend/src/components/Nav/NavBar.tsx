
import { useCookies } from 'react-cookie';
import styles from './NavBar.module.scss';
import LogoutButton from '../LogoutButton/LogoutButton';

const NavBar = () => {
  const [cookies] = useCookies(['access_token']);
  const isAuthenticated = !!cookies.access_token;
  return (
    <nav className={styles.navBar}>
      <div>
        <a href="/"><h1>SPI</h1></a>
      </div>
      {!isAuthenticated ? (
        <div className={styles.navBarForms}>
          <a href="/login">Login</a>
          <a href="/register">Cadastrar</a>
        </div>
      ) : (
        <div className={styles.navBarForms}>
          <LogoutButton/>
          <a href="/list">Lista de Usuários</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
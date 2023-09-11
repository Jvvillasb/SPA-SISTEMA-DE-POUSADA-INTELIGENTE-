import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { useCookies } from 'react-cookie';

jest.mock('react-cookie');

describe('NavBar', () => {
  beforeEach(() => {
    (useCookies as jest.Mock).mockReturnValue([{ access_token: 'test-token' }, jest.fn(), jest.fn()]);
  });

  it('should render correctly', () => {
    const { getByText } = render(<NavBar />);
    expect(getByText('SPI')).toBeInTheDocument();
    expect(getByText('Lista de Usuários')).toBeInTheDocument();
  });

  it('should render correctly when user is not authenticated', () => {
    (useCookies as jest.Mock).mockReturnValue([{}, jest.fn(), jest.fn()]);
    const { getByText, queryByText } = render(<NavBar />);
    expect(queryByText('Lista de Usuários')).not.toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Cadastrar')).toBeInTheDocument();
  });
});

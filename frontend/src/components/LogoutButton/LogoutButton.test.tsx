import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LogoutButton from './LogoutButton';
import { useCookies } from 'react-cookie';

// Fazer o mock de `useCookies` do pacote react-cookie
jest.mock('react-cookie', () => ({
    useCookies: jest.fn()
}));

describe('<LogoutButton />', () => {
    let mockRemoveCookie: jest.Mock;

    beforeEach(() => {
        mockRemoveCookie = jest.fn();
        (useCookies as jest.Mock).mockImplementation(() => [[], undefined, mockRemoveCookie]);

        Object.defineProperty(window, 'location', {
            value: {
                assign: jest.fn(),
                href: ''
            },
            writable: true
        });
    });

    it('should render the logout button', () => {
        render(<LogoutButton />);
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    it('should call removeCookie when button is clicked', () => {
        render(<LogoutButton />);
        fireEvent.click(screen.getByText('Logout'));
        expect(mockRemoveCookie).toHaveBeenCalledWith('access_token');
    });

    it('should navigate to /login when button is clicked', () => {
        render(<LogoutButton />);
        fireEvent.click(screen.getByText('Logout'));
        expect(window.location.href).toBe('/login');
    });
});

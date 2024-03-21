import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import TopNavigation from './TopNavigation';

jest.mock('react-cookie', () => ({
    useCookies: jest
        .fn()
        .mockImplementation(() => [
            { access_token: 'mock_token' },
            jest.fn(),
            jest.fn(),
        ]),
}));

const navigateMock = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => navigateMock,
}));

describe('TopNavigation', () => {
    beforeEach(() => {
        navigateMock.mockReset();
    });

    it('renders common routes for unauthenticated users', () => {
        (useCookies as jest.Mock).mockReturnValue([
            { access_token: null },
            jest.fn(),
            jest.fn(),
        ]);

        const { getByText } = render(
            <Router>
                <TopNavigation />
            </Router>
        );

        expect(getByText('Login')).toBeInTheDocument();
    });

    it('renders authenticated routes for authenticated users', () => {
        (useCookies as jest.Mock).mockReturnValue([
            { access_token: 'mock_token' },
            jest.fn(),
            jest.fn(),
        ]);

        const { getByText } = render(
            <Router>
                <TopNavigation />
            </Router>
        );

        expect(getByText('Quartos')).toBeInTheDocument();
    });

    it('calls removeCookie and redirects to /login on logout', () => {
        const removeCookieMock = jest.fn();
        (useCookies as jest.Mock).mockReturnValue([
            { access_token: 'mock_token' },
            jest.fn(),
            removeCookieMock,
        ]);

        const { getByTestId } = render(
            <Router>
                <TopNavigation />
            </Router>
        );

        fireEvent.click(getByTestId('logout-button'));

        expect(removeCookieMock).toHaveBeenCalledWith('access_token');
        expect(navigateMock).toHaveBeenCalledWith('/login');
    });
});

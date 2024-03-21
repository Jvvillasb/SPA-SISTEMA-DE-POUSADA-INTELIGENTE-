import React from 'react';
import { render, act } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import AuthChecker from './authChecker';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('react-cookie', () => ({
    useCookies: jest.fn(),
}));

describe('AuthChecker', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
        (useCookies as jest.Mock).mockReturnValue([{ access_token: null }]);
    });

    it('should navigate to login page if not authenticated', () => {
        act(() => {
            render(<AuthChecker />);
        });

        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });

    it('should not navigate if authenticated', () => {
        (useCookies as jest.Mock).mockReturnValue([
            { access_token: 'mockToken' },
        ]);

        act(() => {
            render(<AuthChecker />);
        });

        expect(mockNavigate).not.toHaveBeenCalled();
    });
});

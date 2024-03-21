import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';
import * as useDeviceModule from '../../hooks/useDevice/useDevice';
import { CookiesProvider } from 'react-cookie';

// Mock dos componentes TopNavigation e BottomNavigation
jest.mock('../TopNavigation/TopNavigation', () => ({
    __esModule: true,
    default: () => <div data-testid="TopNavigation">TopNavigation</div>,
}));

jest.mock('../BottomNavigation/BottomNavigation', () => ({
    __esModule: true,
    default: () => <div data-testid="BottomNavigation"></div>,
}));

describe('Navigation Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders TopNavigation for all devices', () => {
        jest.spyOn(useDeviceModule, 'default').mockReturnValue({
            isPhone: false,
            isTable: false,
            isDesktop: true,
        });

        const { getByTestId, queryByTestId } = render(
            <CookiesProvider>
                <Navigation />
            </CookiesProvider>
        );

        expect(getByTestId('TopNavigation')).toBeInTheDocument();
        expect(queryByTestId('BottomNavigation')).not.toBeInTheDocument();
    });

    it('renders BottomNavigation for authenticated users on phones', () => {
        document.cookie = 'access_token=mock_token';
        jest.spyOn(useDeviceModule, 'default').mockReturnValue({
            isPhone: true,
            isTable: false,
            isDesktop: false,
        });

        const { getByTestId } = render(
            <CookiesProvider>
                <Navigation />
            </CookiesProvider>
        );
        expect(getByTestId('BottomNavigation')).toBeInTheDocument();
    });
});

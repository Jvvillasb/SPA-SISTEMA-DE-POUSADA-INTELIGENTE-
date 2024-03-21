import { ReactElement } from 'react';

import { render, screen } from '@testing-library/react';

import BottomNavigation from './BottomNavigation';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    NavLink: ({ children }: { children: ReactElement }) => <a>{children}</a>,
}));

jest.mock('react-icons/md', () => ({
    ...jest.requireActual('react-icons/md'),
    MdOutlineHouse: () => <div data-testid="house-icon" />,
    MdPersonOutline: () => <div data-testid="person-icon" />,
    MdOutlineDirectionsBus: () => <div data-testid="bus-icon" />,
    MdHouseSiding: () => <div data-testid="home-icon" />,
    MdPeopleOutline: () => <div data-testid="people-icon" />,
}));

describe('BottomNavigation', () => {
    it('should render component', () => {
        render(<BottomNavigation />);

        expect(screen.getByTestId('house-icon')).toBeInTheDocument();
        expect(screen.getByTestId('person-icon')).toBeInTheDocument();
        expect(screen.getByTestId('bus-icon')).toBeInTheDocument();
        expect(screen.getByTestId('home-icon')).toBeInTheDocument();
        expect(screen.getByTestId('people-icon')).toBeInTheDocument();
    });
});

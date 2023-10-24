import { ReactElement } from 'react';

import { render, screen } from '@testing-library/react';

import BottomNavigation from './BottomNavigation';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    NavLink: ({ children }: { children: ReactElement }) => <a>{children}</a>,
}));

jest.mock('react-icons/md', () => ({
    ...jest.requireActual('react-icons/md'),
    MdOutlineRoom: () => <div data-testid='room-icon'/>,
    MdOutlineHome: () => <div data-testid='home-icon'/>,
    MdPersonOutline: () => <div data-testid='person-icon'/>,
    MdOutlineDirectionsBus: () => <div data-testid='bus-icon'/>,
}));

describe('BottomNavigation', () => {

    it('should render component', () => {
        render(<BottomNavigation />);

        expect(screen.getByTestId('room-icon')).toBeInTheDocument()
        expect(screen.getByTestId('home-icon')).toBeInTheDocument()
        expect(screen.getByTestId('person-icon')).toBeInTheDocument()
        expect(screen.getByTestId('bus-icon')).toBeInTheDocument()
    });
});

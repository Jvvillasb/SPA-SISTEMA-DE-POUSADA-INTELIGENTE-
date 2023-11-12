import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SideMenu from './SideMenu';
import Styles from './SideMenu.module.scss';

describe('<SideMenu />', () => {
    it('should render correctly', () => {
        render(<SideMenu />);

        expect(screen.getByText('Atendimentos')).toBeInTheDocument();
        expect(screen.getByText('Clientes')).toBeInTheDocument();
    });

    it('should highlight Atendimentos when clicked', () => {
        render(<SideMenu />);
        const atendimentosLink = screen.getByText('Atendimentos');

        fireEvent.click(atendimentosLink);

        expect(atendimentosLink.classList.contains(Styles.selected)).toBe(true);
    });

    it('should highlight Clientes when clicked', () => {
        render(<SideMenu />);
        const clientesLink = screen.getByText('Clientes');

        fireEvent.click(clientesLink);

        expect(clientesLink.classList.contains(Styles.selected)).toBe(true);
    });
});

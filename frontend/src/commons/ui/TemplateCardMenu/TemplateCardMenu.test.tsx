import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TemplateCardMenu from './TemplateCardMenu';
import { TemplateCardMenuAction } from 'src/commons/types/TemplateCardMenu';

describe('<TemplateCardMenu />', () => {
    it('should render the button to open menu', () => {
        render(<TemplateCardMenu />);
        expect(screen.getByLabelText('Options')).toBeInTheDocument();
    });

    it('should open the menu when button is clicked', () => {
        const actions = [
            { label: 'Action 1', onClick: jest.fn() },
            { label: 'Action 2', onClick: jest.fn() },
        ];
        render(<TemplateCardMenu actions={actions} />);
        fireEvent.click(screen.getByLabelText('Options'));
        expect(screen.getByText('Action 1')).toBeInTheDocument();
        expect(screen.getByText('Action 2')).toBeInTheDocument();
    });

    it('should call onClick when a menu item is clicked', () => {
        const actions = [
            { label: 'Action 1', onClick: jest.fn() },
            { label: 'Action 2', onClick: jest.fn() },
        ];
        render(<TemplateCardMenu actions={actions} />);
        fireEvent.click(screen.getByLabelText('Options'));
        fireEvent.click(screen.getByText('Action 1'));
        expect(actions[0].onClick).toHaveBeenCalled();
    });

    it('should not show the menu list when there are no actions', () => {
        const actions: TemplateCardMenuAction[] | undefined = [];
        render(<TemplateCardMenu actions={actions} />);
        fireEvent.click(screen.getByLabelText('Options'));
        expect(screen.queryByText('Action 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Action 2')).not.toBeInTheDocument();
    });
});

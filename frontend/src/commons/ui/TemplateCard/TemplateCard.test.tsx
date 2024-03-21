import { render, screen } from '@testing-library/react';
import TemplateCard from './TemplateCard';

describe('TemplateCard', () => {
    const mockTitle = 'Card title';
    const mockSubtitle = 'Card subtitle';
    const mockBodyItems = ['Item 1', 'Item 2'];
    const mockActions = [{ label: 'Action 1', onClick: jest.fn() }];

    it('should render component without action menu', () => {
        render(
            <TemplateCard
                title={mockTitle}
                subtitle={mockSubtitle}
                bodyItems={mockBodyItems}
            />
        );

        expect(screen.getByText(/item 1/i)).toBeInTheDocument();
        expect(screen.getByText(/item 2/i)).toBeInTheDocument();
        expect(screen.getByText(/card subtitle/i)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /card title/i })
        ).toBeInTheDocument();
    });

    it('should render component with action menu', () => {
        render(
            <TemplateCard
                title={mockTitle}
                actions={mockActions}
                subtitle={mockSubtitle}
                bodyItems={mockBodyItems}
            />
        );

        expect(screen.getByText(/item 1/i)).toBeInTheDocument();
        expect(screen.getByText(/item 2/i)).toBeInTheDocument();
        expect(screen.getByText(/card subtitle/i)).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /card title/i })
        ).toBeInTheDocument();
        expect(screen.getByText(/action 1/i)).toBeInTheDocument();
    });
});

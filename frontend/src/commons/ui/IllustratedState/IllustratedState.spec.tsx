import { ReactNode } from 'react';

import { render, screen } from '@testing-library/react';
import IllustratedState from './IllustratedState';

const makeSUT = (title: string, subtitle: string, children: ReactNode) => {
    render(
        <IllustratedState title={title} subtitle={subtitle}>
            {children}
        </IllustratedState>
    );
};

describe('IllustratedState', () => {
    const mockTitle = 'Fake Title';
    const mockSubtitle = 'Fake subtitle';
    const mockChildren = <div data-testid="children"></div>;

    it('should render component', () => {
        makeSUT(mockTitle, mockSubtitle, mockChildren);

        expect(screen.getByText(/fake title/i)).toBeInTheDocument();
        expect(screen.getByText(/fake subtitle/i)).toBeInTheDocument();
        expect(screen.getByTestId('children')).toBeInTheDocument();
    });
});

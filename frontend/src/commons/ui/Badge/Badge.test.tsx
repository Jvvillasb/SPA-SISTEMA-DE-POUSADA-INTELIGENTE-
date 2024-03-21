import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
    it('renders without crashing', () => {
        render(<Badge>Test Badge</Badge>);

        expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });
});

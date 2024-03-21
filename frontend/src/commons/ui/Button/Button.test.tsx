import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('should renders without crashing', () => {
        render(<Button />);
    });

    it('should renders children', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('should calls onClick when clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <Button onClick={onClick}>Click me</Button>
        );
        fireEvent.click(getByText('Click me'));
        expect(onClick).toHaveBeenCalled();
    });
});

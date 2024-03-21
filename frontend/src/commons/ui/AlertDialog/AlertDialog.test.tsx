import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertDialog from './AlertDialog';

describe('AlertDialog', () => {
    it('should render AlertDialog without errors', () => {
        render(
            <AlertDialog
                isOpen={true}
                onClose={() => {}}
                title="Test Title"
                description="Test description"
                confirmButtonText="Confirm"
                cancelButtonText="Cancel"
                onConfirm={() => {}}
            />
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test description')).toBeInTheDocument();
        expect(screen.getByText('Confirm')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
});

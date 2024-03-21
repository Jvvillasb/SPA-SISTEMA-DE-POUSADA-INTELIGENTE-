import React from 'react';
import { render } from '@testing-library/react';
import CreateClientForm from './Forms';

const mockCreateClient = jest.fn();

const mockExcursions = [
    { id: 1, nome: 'Caravana 1' },
    { id: 2, nome: 'Caravana 2' },
];
const mockGuideUsers = [
    { id: 1, nome: 'Guia 1' },
    { id: 2, nome: 'Guia 2' },
];

jest.mock('react-hook-form', () => ({
    useForm: jest.fn().mockImplementation(() => ({
        register: jest.fn(),
        handleSubmit: jest.fn(),
        reset: jest.fn(),
        formState: { errors: {} },
    })),
}));

jest.mock('../../../../store/index', () => ({
    __esModule: true,
    default: () => ({
        createClient: mockCreateClient,
        excursions: mockExcursions,
        guideUsers: mockGuideUsers,
    }),
}));

describe('CreateClientForm', () => {
    it('should render Forms with activeStep 0', () => {
        const { getByText } = render(<CreateClientForm activeStep={0} />);

        expect(getByText('Nome:')).toBeInTheDocument();
    });

    it('should render Forms with activeStep 1', () => {
        const { getByText } = render(<CreateClientForm activeStep={1} />);

        expect(getByText('Evento:')).toBeInTheDocument();
    });

    it('should render Forms and submit', () => {
        const { getByText } = render(<CreateClientForm activeStep={1} />);
        const submitButton = getByText('Salvar');

        submitButton.click();

        expect(mockCreateClient).toHaveBeenCalled();
    });
});

import styled from '@emotion/styled';
import theme from '../../../../theme';
import InputMask from 'react-input-mask';
import { Input as chakraInput } from '@chakra-ui/react';

const BaseInputsStyle = `
padding: 0.5rem;
border-radius: 0.5rem;
border: 1px solid ${theme.colors.mediumBlue};
color: ${theme.colors.darkGray};
&:focus {
    border-color: ${theme.colors.customGreen};
    outline: none;
    box-shadow: 0 0 0 0.1rem ${theme.colors.customGreen};
}
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: auto;
    padding: 1.5rem;
    background-color: #f8fafc;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const TwoColumns = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Input = styled(chakraInput)`
    ${BaseInputsStyle};
`;

export const InputMaskStyled = styled(InputMask)`
    ${BaseInputsStyle};
`;

export const Select = styled.select`
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.mediumBlue};
    color: ${theme.colors.darkGray};
    &:focus {
        border-color: ${theme.colors.customGreen};
        outline: none;
        box-shadow: 0 0 0 0.1rem ${theme.colors.customGreen};
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.darkGray};
    font-size: 0.9rem;
    font-weight: bold;
    span {
        margin-bottom: 0.5rem;
    }
`;

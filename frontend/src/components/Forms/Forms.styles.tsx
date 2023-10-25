import styled from '@emotion/styled';
import theme from '../../theme';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    padding: 1rem;
    background-color: ${theme.colors.softBlue};
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    max-height: 750px;
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const TwoColumns = styled.div`
    display: flex;
    gap: 1rem;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
`;

export const Input = styled.input`
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    flex: 1;
    transition:
        border-color 0.3s,
        box-shadow 0.3s;

    &:focus {
        border-color: #${theme.colors.softBlue};
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const Select = styled.select`
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    flex: 1;
    transition:
        border-color 0.3s,
        box-shadow 0.3s;

    &:focus {
        border-color: ${theme.colors.softBlue};
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 600;

    span {
        margin-bottom: 0.5rem;
    }
`;

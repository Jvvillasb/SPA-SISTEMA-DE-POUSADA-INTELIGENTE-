import styled from '@emotion/styled';
import { Select as chakraSelect } from '@chakra-ui/react';

export const StyledInput = styled.input`
    border-radius: 4px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 16px;
    margin-right: auto;
    width: 315px;
    height: 36px;
    padding: 8px;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
`;

export const Select = styled(chakraSelect)`
    width: 150px;
`;

export const Option = styled.option`
    color: #000;
    gap: 16px;
`;

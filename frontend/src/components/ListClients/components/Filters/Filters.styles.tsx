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
`;

export const Select = styled(chakraSelect)`
    width: 100%;
`;

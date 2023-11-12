import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

export const SideMenuContainer = styled(Box)`
    width: 250px;
    background-color: #f7f8fc;
    padding: 16px;
    transition: width 0.3s ease-in-out;

    @media (max-width: 768px) {
        width: 60px; // Ou usar ícone de hamburguer
    }
`;

export const MenuItem = styled.a<{ selected: boolean }>`
    display: block;
    padding: 12px 16px;
    color: #2f3846;
    text-decoration: none;
    background-color: ${(props) =>
        props.selected ? '#D8E4F4' : 'transparent'};
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #eff3fc;
    }
`;

export const HamburgerButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;
    }
`;

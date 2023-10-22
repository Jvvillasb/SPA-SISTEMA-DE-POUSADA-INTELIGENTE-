import styled from '@emotion/styled';

import { NavLink as RouterDomNavLink } from 'react-router-dom';
import { breakpoints } from './../../../commons/constants/breakpoints';

export const TopNavigationContainer = styled.nav`
    height: 4rem;
    background: #fff;
    box-shadow: 0px -1px 6px 0px rgba(131, 131, 131, 0.25) inset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 1rem;
    z-index: 2;
    flex-wrap: wrap;
`;

export const TopNavigationBrand = styled(RouterDomNavLink)`
    color: #39ae71;
    font-weight: 600;
    font-size: 1.5rem;
`;

export const TopNavigationList = styled.ul`
    list-style: none;
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;

    @media screen and (max-width: ${breakpoints.sm}px) {
        display: none;
    }
`;

export const TopNavigationItem = styled.li`
    cursor: pointer;

    &:hover {
        background-color: #f3f4f5;
    }
`;

export const TopNavigationLink = styled(RouterDomNavLink)`
    color: #798494;
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 1.05rem;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        color: #39ae71;
        background-color: #f3f4f5;
    }

    &[aria-current='page'] {
        color: #39ae71;
    }
`;

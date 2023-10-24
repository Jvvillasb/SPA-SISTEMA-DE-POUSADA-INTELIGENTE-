import { Box } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

export const BottomNavigationContainer = styled(Box)`
    position: fixed;
    left: 0;
    bottom: 0;
    height: 64px;
    width: 100%;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0px -1px 6px 0px rgba(131, 131, 131, 0.25) inset;
`

export const BottomNavigationList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const BottomNavigationListItem = styled.li`
`

export const BottomNavigationListLink = styled(NavLink)`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover, &.active {
        background-color: #f3f4f5;
    }

    &.active {
        svg {
            fill: #39ae71;
        }
    }
`
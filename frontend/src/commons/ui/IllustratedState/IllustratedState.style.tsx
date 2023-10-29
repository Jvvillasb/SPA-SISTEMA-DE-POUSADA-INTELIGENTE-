import { Text } from '@chakra-ui/react';

import styled from '@emotion/styled';

export const IllustratedStateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
`;

export const IllustratedStateContainerTitle = styled(Text)`
    color: #798494;
    font-weight: 600;
    font-size: 1.45rem;
`;

export const IllustratedStateContainerSubtitle = styled(Text)`
    color: #798494;
    font-weight: 500;
    font-size: 1.2rem;
`;

export const IllustratedStateContainerContent = styled.div`
    margin-top: 1rem;
`;

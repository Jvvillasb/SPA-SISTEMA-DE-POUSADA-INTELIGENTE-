import { IconButton as chakraIconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const IconButton = styled(chakraIconButton)`
    position: fixed;
    bottom: 2rem;
    right: 2rem;

    @media (max-width: 768px) {
        bottom: 5rem;
    }
`;

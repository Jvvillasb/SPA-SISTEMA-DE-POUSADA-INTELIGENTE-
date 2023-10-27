import styled from '@emotion/styled';
import { Stepper as ChakraStepper } from '@chakra-ui/react';

export const Stepper = styled(ChakraStepper)`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 50%;
    align-self: center;
`;

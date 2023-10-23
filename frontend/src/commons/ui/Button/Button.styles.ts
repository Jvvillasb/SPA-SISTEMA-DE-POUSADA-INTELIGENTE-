import styled from '@emotion/styled';

import { Button as ChakraButton } from '@chakra-ui/react';
import theme from '../../../theme';

export const Button = styled(ChakraButton)`
    border-radius: 4px;
    background-color: ${(props) => (props.colorScheme ? props.colorScheme : theme.colors.customGreen)};
    &:hover {
        filter: brightness(90%);
    }
`;
import {
    BoxProps,
    Box as ChakraBox,
    Text as ChakraText,
    MenuButton as ChakraMenuButton,
    Avatar as ChakraAvatar,
    Heading as ChakraHeading,
    Checkbox,
} from '@chakra-ui/react';

import styled from '@emotion/styled';

import theme from '../../../theme';
interface TemplateCardContainerProps extends BoxProps {
    hasActions: boolean;
}

export const TemplateCardContainer = styled(ChakraBox, {
    shouldForwardProp: (propName) => propName !== 'hasActions',
})<TemplateCardContainerProps>`
    border-radius: 4px;
    border-top: 6px solid #81868f;
    box-shadow: 0px 0px 5px 0px rgba(197, 197, 197, 0.44);
    transition: all 0.4s;
    padding: ${(props) => (props.hasActions ? '54px 20px 20px 20px' : '20px')};
    position: relative;
    height: 100%;
    &:hover {
        border-top: 6px solid #${theme.colors.customGreen};
        box-shadow: 0px 0px 5px 0px rgba(197, 197, 197, 0.88);
    }
`;

export const TemplateCardAvatar = styled(ChakraAvatar)`
    border-radius: 6px;
`;

export const TemplateCardActions = styled(ChakraMenuButton)`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const TemplateCardBody = styled(ChakraBox)`
    margin-top: 32px;
`;

export const TemplateCardBodyText = styled(ChakraText)`
    color: #959eaf;
    margin-bottom: 4px;
`;

export const TemplateCardTitle = styled(ChakraHeading)`
    color: #81868f;
    margin-bottom: 4px;
`;

export const TemplateCardCheckbox = styled(Checkbox)`
    position: absolute;
    top: 16px;
    left: 24px;
`;

import {
  BoxProps,
  Box as ChakraBox,
  Text as ChakraText,
  MenuButton as ChakraMenuButton,
  Avatar as ChakraAvatar,
  Heading as ChakraHeading,
} from "@chakra-ui/react";

import styled from "@emotion/styled";

interface TemplateCardContainerProps extends BoxProps {
  hasActions: boolean;
}

export const TemplateCardContainer = styled(ChakraBox, {
  shouldForwardProp: (propName) => propName !== "hasActions",
})<TemplateCardContainerProps>`
  border-radius: 4px;
  max-width: 300px;
  border-top: 6px solid #81868f;
  box-shadow: 0px 0px 5px 0px rgba(197, 197, 197, 0.44);
  transition: all 0.4s;
  padding: ${(props) => (props.hasActions ? "48px 20px 20px 20px" : "20px")};
  position: relative;
  &:hover {
    border-top: 6px solid #39ae71;
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
  width: 300px;
`;

export const TemplateCardBodyText = styled(ChakraText)`
  color: #959eaf;
  margin-bottom: 4px;
`;

export const TemplateCardTitle = styled(ChakraHeading)`
  color: #81868f;
`;

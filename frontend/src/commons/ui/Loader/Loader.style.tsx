import { Box, Text } from "@chakra-ui/react";

import styled from "@emotion/styled";

export const LoaderContainer = styled(Box)`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const LoaderMessage = styled(Text)`
  font-size: 18px;
  color: #2f3846;
  margin-top: 20px;
`;

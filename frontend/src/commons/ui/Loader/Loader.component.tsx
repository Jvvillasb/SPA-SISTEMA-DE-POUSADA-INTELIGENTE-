import React from "react";
import { Spinner } from "@chakra-ui/react";

import { LoaderContainer, LoaderMessage } from "./Loader.style";

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Carregando..." }) => {
  return (
    <LoaderContainer>
      <Spinner size="xl" thickness="4px" color="#39AE71" />
      <LoaderMessage>{message}</LoaderMessage>
    </LoaderContainer>
  );
};

export default Loader;

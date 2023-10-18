import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const PageContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box style={{ maxWidth: "1260px", height: "100%", margin: "0 auto" }}>
      {children}
    </Box>
  );
};

export default PageContainer;

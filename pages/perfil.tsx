import { Flex } from "@chakra-ui/react";
import React from "react";
import Container from "../components/Container";
import Navigation from "../components/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Perfil: React.FC<LayoutProps> = (props) => {
  return (
    <Container>
      <Flex>
        <h1>perfil</h1>
      </Flex>
    </Container>
  );
};

export default Perfil;

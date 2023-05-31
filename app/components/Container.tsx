import React from "react";
import Navigation from "./navigation";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

// "LayoutProps" se utiliza pra definir los tipso de las props esperadas en "Layout". Luego se utiliza el tipo generico "React.FC" para indicar
// que "Layout" es un componente de funcion que acepta las props definidas en "LayoutProps".

const Container: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Miso Woods</title>
      </Head>
      <Navigation activeRoute={""} />
      <Flex p={5}>{props.children}</Flex>
    </div>
  );
};

export default Container;

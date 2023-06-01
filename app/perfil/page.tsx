"use client";

import React from "react";
import { Box, Flex, Heading, Text, Button, Avatar } from "@chakra-ui/react";
import Container from "../components/Container";
import Head from "next/head";

interface PerfilProps {
  avatarSrc: string;
}

export const getServerSideProps = async () => {
  const avatarSrc = "https://i.pravatar.cc/300";

  return {
    props: {
      avatarSrc,
    },
  };
};

const Perfil: React.FC<PerfilProps> = ({ avatarSrc }) => {
  return (
    <Container>
      <Head>
        <title>Perfil - Miso Woods</title>
      </Head>
      <Flex align="center" justify="center" direction="column" mt={8}>
        <Avatar size="2xl" src={"https://i.pravatar.cc/300"} />

        <Heading mt={4}>John Doe</Heading>
        <Text mt={2} color="gray.500">
          UI/UX Designer
        </Text>
        <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            ipsum eget risus luctus vulputate. In hac habitasse platea dictumst.
            Etiam in metus eu lectus feugiat consequat. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Sed non placerat mi. Nulla facilisi. Donec fermentum lobortis lectus
            id mattis. Morbi eu risus ut mi iaculis tempus. Donec at urna eu
            neque placerat varius. Nulla rutrum ultricies justo, sed rhoncus
            turpis congue in.
          </Text>
        </Box>
        <Button mt={4} colorScheme="blue">
          Editar perfil
        </Button>
      </Flex>
    </Container>
  );
};

export default Perfil;

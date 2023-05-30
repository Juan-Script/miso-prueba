import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import Container from "../components/Container";
import Head from "next/head";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Nosotros: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Nosotros - Miso Woods</title>
      </Head>
      <Flex flexDirection={"column"} p={5}>
        <Heading mb={5}>Nosotros</Heading>
        <Text mt={4} fontSize="lg" color="gray.600">
          Bienvenidos a nuestra página de Nosotros. Somos una empresa dedicada a
          la fabricación y venta de productos de madera de alta calidad.
        </Text>

        <Text mt={8} fontWeight="semibold" fontSize="xl">
          Nuestros valores principales incluyen:
        </Text>
        <Wrap mt={4}>
          <WrapItem>
            <Box display="flex" alignItems="center">
              <IoMdCheckmarkCircle style={{ marginRight: "4px" }} />
              <Text>Sostenibilidad</Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box display="flex" alignItems="center">
              <IoMdCheckmarkCircle style={{ marginRight: "4px" }} />
              <Text>Calidad</Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box display="flex" alignItems="center">
              <IoMdCheckmarkCircle style={{ marginRight: "4px" }} />
              <Text>Diseño innovador</Text>
            </Box>
          </WrapItem>
        </Wrap>
        <Box ml={60} mt={50}>
          <Image
            src="https://misowoods.com/wp-content/uploads/2021/07/11.jpg"
            alt="Nosotros"
            mt={8}
            borderRadius="xl"
            maxH="300px"
            mx="auto"
            boxShadow="2xl"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Nosotros;

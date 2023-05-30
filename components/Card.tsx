import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

export interface CardProps {
  imagen: string;
  titulo: string;
  precio: string;
}

const Card: React.FC<CardProps> = ({ imagen, titulo, precio }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={imagen} alt={titulo} />
      <Heading size="md" mt={2}>
        {titulo}
      </Heading>
      <Text mt={2}>{precio}</Text>
      <Button mt={2} colorScheme="blue">
        Comprar
      </Button>
    </Box>
  );
};

export default Card;

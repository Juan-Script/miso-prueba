"use client";
import React from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Container from "../components/Container";

import Card from "../components/Card";
import Head from "next/head";

interface Producto {
  key: number;
  imagen: string;
  titulo: string;
  precio: string;
}

const Productos: React.FC = () => {
  const productos: Producto[] = [
    {
      key: 1,
      imagen:
        "https://misowoods.com/wp-content/uploads/2021/07/Product1-Tonkotsu.jpg",

      titulo: "Tonkotsu",
      precio: "$70",
    },
    {
      key: 2,
      imagen:
        "https://misowoods.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-13-at-16.06.55-1.jpg",

      titulo: "Miso",
      precio: "$85",
    },
    {
      key: 3,
      imagen: "https://misowoods.com/wp-content/uploads/2021/07/product6.jpg",
      titulo: "Shoyu",
      precio: "$80",
    },
  ];

  return (
    <Container>
      <Head>
        <title>Productos - Miso Woods</title>
      </Head>
      <Flex flexDirection="column" p={5}>
        <Heading mb={5}>Productos</Heading>
        <SimpleGrid columns={3} spacing={4} mt={4}>
          {productos.map((producto) => (
            <Card
              key={producto.key}
              imagen={producto.imagen}
              titulo={producto.titulo}
              precio={producto.precio}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Productos;

"use client";

import React from "react";
import Head from "next/head";
import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-fetch";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Container from "./components/Container";

interface Review {
  id: number;
  name: string;
  positiveReview: string;
}

interface IndexProps {
  reviews: Review[] | undefined; // Asegurarse de que 'reviews' pueda ser undefined
}

const Index: NextPage<IndexProps> = ({ reviews }) => {
  return (
    <Container>
      <Head>
        <title>Home - Miso Woods</title>
      </Head>
      <Box
        textAlign="center"
        mt={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h1" size="2xl">
          Teclados Custom de Madera
        </Heading>
        <Text mt={4} fontSize="xl">
          ¡Experimenta la elegancia y la calidad de nuestros teclados custom
          hechos a mano!
        </Text>
        <Image
          src="https://misowoods.com/wp-content/uploads/2021/07/product6.jpg"
          alt="Teclado custom de madera"
          mt={8}
          borderRadius="xl"
          boxShadow="xl"
          maxW="100%"
          maxH="500px"
        />
        <Text mt={8}>
          En Teclados Custom, nos especializamos en la fabricación de teclados
          personalizados hechos de madera de alta calidad. Cada teclado es
          meticulosamente diseñado y construido a mano por nuestros expertos
          artesanos.
        </Text>
        <Text mt={4}>
          Nuestros teclados destacan por su precisión, durabilidad y diseño
          único. Utilizamos los mejores materiales para garantizar una
          experiencia de escritura excepcional y una apariencia elegante.
        </Text>
        <Button colorScheme="blue" size="lg" mt={8}>
          Explorar Teclados
        </Button>
      </Box>
    </Container>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const reviews = data.slice(0, 6).map((item: any) => ({
    id: item.id,
    name: item.title,
    positiveReview: item.body,
  }));
  return { reviews };
};

export default Index;

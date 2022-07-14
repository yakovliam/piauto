import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Mazda from '../assets/mazda.png';

const CarImageSection = () => (
  <Flex
    flexDir="row"
    justifyContent="center"
    alignItems="flex-start"
    boxShadow="lg"
    w="100%"
    bg="gray.100"
  >
    <Image h="sm" w="sm" objectFit="contain" src={Mazda} alt="car-model" />
  </Flex>
);

export default CarImageSection;

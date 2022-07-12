import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Mazda from '../../assets/mazda.png';

const InfoView = () => {
  const doAThing = () => {};

  return (
    <Box onLoad={doAThing} flexGrow={1} maxW="3xl">
      <Flex
        flexDir="row"
        justifyContent="center"
        alignItems="stretch"
        alignContent="flex-start"
        gap={5}
        borderRadius="lg"
        flexWrap="wrap"
        p={3}
        h="100%"
      >
        <Flex
          bg="gray.700"
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          borderRadius={30}
          h="inherit"
        >
          <Image
            h="3xl"
            w="3xl"
            objectFit="contain"
            src={Mazda}
            alt="car-model"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default InfoView;

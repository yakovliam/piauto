import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import CarControlSection from '../CarControlSection';
import CarImageSection from '../CarImageSection';

const InfoControlView = () => {
  const doAThing = () => {};

  return (
    <Box onLoad={doAThing} w="100%">
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="center"
        alignContent="center"
        gap={5}
        h="100%"
        bg="gray.200"
      >
        <CarImageSection />
        <CarControlSection />
      </Flex>
    </Box>
  );
};

export default InfoControlView;

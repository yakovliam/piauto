import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import HomePage from './pages/HomePage';

export default () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <HomePage />
    </Box>
  </ChakraProvider>
);

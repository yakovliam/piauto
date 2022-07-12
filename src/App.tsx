import * as React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import HomePage from './pages/HomePage';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <HomePage />
    </Box>
  </ChakraProvider>
);

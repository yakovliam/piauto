import * as React from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import ControlView from '../components/views/ControlView';
import InfoView from '../components/views/InfoView';

export default () => (
  <Grid h="100vh" overflow="hidden" bg="gray.800">
    <Flex flexDir="row" h="inherit" alignItems="stretch" p={5}>
      <InfoView />
      <ControlView />
    </Flex>
  </Grid>
);

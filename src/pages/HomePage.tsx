import * as React from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import VisualView from '../components/views/VisualView';
import InfoControlView from '../components/views/InfoControlView';

export default () => (
  <Grid h="100vh" overflow="hidden">
    <Flex flexDir="row" h="inherit" alignItems="stretch">
      <InfoControlView />
      <VisualView />
    </Flex>
  </Grid>
);

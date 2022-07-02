import * as React from 'react';
import { Flex, Grid, useColorModeValue } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import useSound from 'use-sound';
import { GiSteeringWheel } from 'react-icons/gi';
import ColorModeSwitcher from '../ColorModeSwitcher';
import ToggleableButton from '../components/ToggleableButton';
import turnOnSound from '../assets/turn_on_sound.mp3';
import turnOffSound from '../assets/turn_off_sound.mp3';

export default () => {
  const animation = useAnimation();
  const enabledColor = useColorModeValue('#2C7A7B', '#2C7A7B');
  const disabledColor = useColorModeValue('#7B341E', '#7B341E');

  const [playOn, { stop: stopOn }] = useSound(turnOnSound, { volume: 1.0 });
  const [playOff, { stop: stopOff }] = useSound(turnOffSound, { volume: 1.0 });

  const enabledSequence = async () => {
    await animation.start({
      backgroundColor: ['#1A202C', enabledColor, '#1A202C'],
    });
    animation.start({ scale: 1 });
  };
  const disabledSequence = async () => {
    await animation.start({
      backgroundColor: ['#1A202C', disabledColor, '#1A202C'],
    });
    animation.start({ scale: 1 });
  };
  return (
    <Grid minH="100vh" p={3} as={motion.div} animate={animation}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Flex
        flexDir="row"
        justifyContent="center"
        justifyItems="center"
        gap="5rem"
        flexWrap="wrap"
      >
        <ToggleableButton
          onClick={(isToggled) => {
            if (isToggled) {
              enabledSequence();
              stopOn();
              stopOff();
              playOn();
            } else {
              disabledSequence();
              stopOn();
              stopOff();
              playOff();
            }
          }}
          title="Autopilot"
          subtitleToggled="Enabled"
          subtitleUntoggled="Disabled"
          icon={GiSteeringWheel}
        />
        <ToggleableButton
          onClick={(isToggled) => {
            if (isToggled) {
              enabledSequence();
            } else {
              disabledSequence();
            }
          }}
          title="Adaptive Cruise Control"
          subtitleToggled="Enabled"
          subtitleUntoggled="Disabled"
          icon={undefined}
        />
        <ToggleableButton
          onClick={(isToggled) => {
            if (isToggled) {
              enabledSequence();
            } else {
              disabledSequence();
            }
          }}
          title="Accident Detection"
          subtitleToggled="Enabled"
          subtitleUntoggled="Disabled"
          icon={undefined}
        />
      </Flex>
    </Grid>
  );
};

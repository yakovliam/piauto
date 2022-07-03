import * as React from 'react';
import { Flex, Grid, useColorModeValue } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import useSound from 'use-sound';
import { GiSteeringWheel } from 'react-icons/gi';
import { TiRadar } from 'react-icons/ti';
import { FaCarCrash } from 'react-icons/fa';
import ColorModeSwitcher from '../ColorModeSwitcher';
import ToggleableButton from '../components/ToggleableButton';

import apEn from '../assets/ap_en.wav';
import apDen from '../assets/ap_den.wav';
import apEnInfo from '../assets/ap_en_info.mp3';
import genEn from '../assets/gen_en.wav';
import genDen from '../assets/gen_den.wav';

export default () => {
  const animation = useAnimation();
  const enabledColor = useColorModeValue('#2C7A7B', '#2C7A7B');
  const disabledColor = useColorModeValue('#7B341E', '#7B341E');
  const backgroundColor = useColorModeValue('#ffffff', '#1A202C');

  const [playApEn, { stop: stopApEn }] = useSound(apEn, { volume: 1.0 });
  const [playApDen, { stop: stopApDen }] = useSound(apDen, { volume: 1.0 });
  const [playApEnInfo, { stop: stopApEnInfo }] = useSound(apEnInfo, {
    volume: 1.0,
  });
  const [playGenEn, { stop: stopGenEn }] = useSound(genEn, { volume: 1.0 });
  const [playGenDen, { stop: stopGenDen }] = useSound(genDen, { volume: 1.0 });

  const enabledSequence = async () => {
    await animation.start({
      backgroundColor: [backgroundColor, enabledColor, backgroundColor],
    });
    animation.start({ scale: 1 });
  };
  const disabledSequence = async () => {
    await animation.start({
      backgroundColor: [backgroundColor, disabledColor, backgroundColor],
    });
    animation.start({ scale: 1 });
  };

  const stopAllSounds = () => {
    stopApEn();
    stopApDen();
    stopApEnInfo();
    stopGenEn();
    stopGenDen();
  };

  return (
    <Grid
      minH="100vh"
      p={3}
      as={motion.div}
      animate={animation}
      bg={backgroundColor}
    >
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
              stopAllSounds();
              playApEn();
              // wait 1 second
              setTimeout(() => {
                playApEnInfo();
              }, 1000);
            } else {
              disabledSequence();
              stopAllSounds();
              playApDen();
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
              stopAllSounds();
              playGenEn();
            } else {
              disabledSequence();
              stopAllSounds();
              playGenDen();
            }
          }}
          title="Adaptive Cruise Control"
          subtitleToggled="Enabled"
          subtitleUntoggled="Disabled"
          icon={TiRadar}
        />
        <ToggleableButton
          onClick={(isToggled) => {
            if (isToggled) {
              enabledSequence();
              stopAllSounds();
              playGenEn();
            } else {
              disabledSequence();
              stopAllSounds();
              playGenDen();
            }
          }}
          title="Accident Detection"
          subtitleToggled="Enabled"
          subtitleUntoggled="Disabled"
          icon={FaCarCrash}
        />
      </Flex>
    </Grid>
  );
};

import React from 'react';
import { Flex } from '@chakra-ui/react';
import useSound from 'use-sound';
import { GiSteeringWheel } from 'react-icons/gi';
import { TiRadar } from 'react-icons/ti';
import { FaCarCrash } from 'react-icons/fa';
import CarControlToggleableButton from './CarControlToggleableButton';

import apEn from '../assets/ap_en.wav';
import apDen from '../assets/ap_den.wav';
import genEn from '../assets/gen_en.wav';
import genDen from '../assets/gen_den.wav';

const CarControlSection = () => {
  const [playApEn, { stop: stopApEn }] = useSound(apEn, { volume: 1.0 });
  const [playApDen, { stop: stopApDen }] = useSound(apDen, { volume: 1.0 });
  const [playGenEn, { stop: stopGenEn }] = useSound(genEn, { volume: 1.0 });
  const [playGenDen, { stop: stopGenDen }] = useSound(genDen, { volume: 1.0 });

  const stopAllSounds = () => {
    stopApEn();
    stopApDen();
    stopGenEn();
    stopGenDen();
  };
  return (
    <Flex
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      gap={5}
      flexWrap="wrap"
      flexGrow={1}
      h="100%"
      w="100%"
    >
      <CarControlToggleableButton
        onClick={(isToggled) => {
          if (isToggled) {
            stopAllSounds();
            playApEn();
          } else {
            stopAllSounds();
            playApDen();
          }
        }}
        title="Autopilot"
        subtitleToggled="Enabled"
        subtitleUntoggled="Disabled"
        icon={GiSteeringWheel}
      />
      <CarControlToggleableButton
        onClick={(isToggled) => {
          if (isToggled) {
            stopAllSounds();
            playGenEn();
          } else {
            stopAllSounds();
            playGenDen();
          }
        }}
        title="Lidar Cruise Control"
        subtitleToggled="Enabled"
        subtitleUntoggled="Disabled"
        icon={TiRadar}
      />
      <CarControlToggleableButton
        onClick={(isToggled) => {
          if (isToggled) {
            stopAllSounds();
            playGenEn();
          } else {
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
  );
};
export default CarControlSection;

import {
  Box,
  Flex,
  Heading,
  useBoolean,
  useColorModeValue,
  Text,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

type ToggleableButtonProps = {
  title: string;
  subtitleToggled: string;
  subtitleUntoggled: string;
  icon: React.ElementType | undefined;
  onClick: (isToggled: boolean) => void;
};

export default (props: ToggleableButtonProps) => {
  //     <motion.div
  //     className="container"
  //     whileHover={{ scale: 1.2, rotate: 90 }}
  //     whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  //   />
  const { onClick, title, subtitleToggled, subtitleUntoggled, icon } = props;
  const [isToggled, setIsToggled] = useBoolean();
  const enabledColor = useColorModeValue('green.100', 'green.400');
  const disabledColor = useColorModeValue('gray.100', 'gray.400');

  return (
    <Box
      as={motion.div}
      whileTap={{
        scale: 0.9,
        borderRadius: '100%',
      }}
      whileHover={{ scale: 1.1 }}
      w="sm"
      h="xs"
      padding="md"
      borderRadius="3xl"
      bg={isToggled ? enabledColor : disabledColor}
      onClick={() => {
        setIsToggled.toggle();
        onClick(!isToggled);
      }}
    >
      <Flex
        minH="100%"
        flexDirection="column"
        alignItems="center"
        justify="center"
        gap={5}
      >
        {icon !== undefined ? <Icon w={12} h={12} as={icon} /> : null}
        <Heading>{title}</Heading>
        <Text>{isToggled ? subtitleToggled : subtitleUntoggled}</Text>
      </Flex>
    </Box>
  );
};

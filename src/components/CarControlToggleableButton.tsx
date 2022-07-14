import { Box, Flex, Heading, useBoolean, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

type CarControlToggleableButtonProps = {
  title: string;
  subtitleToggled: string;
  subtitleUntoggled: string;
  icon: React.ElementType | undefined;
  onClick: (isToggled: boolean) => void;
};

export default (props: CarControlToggleableButtonProps) => {
  //     <motion.div
  //     className="container"
  //     whileHover={{ scale: 1.2, rotate: 90 }}
  //     whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  //   />
  const { onClick, title, subtitleToggled, subtitleUntoggled, icon } = props;
  const [isToggled, setIsToggled] = useBoolean();
  const enabledColor = 'green.300';
  const disabledColor = 'white';

  const enabledTextColor = 'white';
  const disabledTextColor = 'black';

  return (
    <Box
      as={motion.div}
      whileTap={{
        scale: 0.9,
        borderRadius: '100%',
      }}
      whileHover={{ scale: 1.1 }}
      // w="xs"
      // h="2xs"
      w={{ base: '12rem' }}
      h={{ base: '10rem' }}
      padding="sm"
      borderRadius="3xl"
      bg={isToggled ? enabledColor : disabledColor}
      onClick={() => {
        setIsToggled.toggle();
        onClick(!isToggled);
      }}
      boxShadow="md"
    >
      <Flex
        minH="100%"
        flexDirection="column"
        alignItems="center"
        justify="center"
        gap={2}
        p={2}
      >
        {icon !== undefined ? (
          <Icon
            w={8}
            h={8}
            as={icon}
            color={isToggled ? enabledTextColor : disabledTextColor}
          />
        ) : null}
        <Heading
          size="2xs"
          color={isToggled ? enabledTextColor : disabledTextColor}
        >
          {title}
        </Heading>
        <Text color={isToggled ? enabledTextColor : disabledTextColor}>
          {isToggled ? subtitleToggled : subtitleUntoggled}
        </Text>
      </Flex>
    </Box>
  );
};

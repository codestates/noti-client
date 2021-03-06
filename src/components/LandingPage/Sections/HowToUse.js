import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcLike, FcAlarmClock, FcAdvertising } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack
    mt="0"
    mb="16"
    align={'center'}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} mb="16" align="center">
        <Heading
        size="xl"
        fontWeight="extrabold"
        mb="16"
        > π κ°νΈνκ² NOTIλ₯Ό μ΄μ©νλ λ°©λ²</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={'μνλ μν μ μ₯'}
          text={
            'μ΅μ  λ°λ§€μ λ³΄μμ μνμλ μνμ κ²μνκ³  μ μ₯ λ²νΌμ λλ¬ μ£ΌμΈμ.'
          }
        />
        <Feature
          icon={<Icon as={FcAlarmClock} w={10} h={10} />}
          title={'μλ¦Ό μ€μ '}
          text={
            'μ μ₯ν μνμ μλ¦Ό λ¦¬μ€νΈμμ μλ¦Ό μ€μ  λλ μ­μ  ν  μ μμ΅λλ€.'
          }
        />
        <Feature
          icon={<Icon as={FcAdvertising} w={10} h={10} />}
          title={'λ°λ§€μ λ³΄ λ―Έλ¦¬ λ°κΈ°'}
          text={
            'μλ¦Ό μ€μ ν μ νμ λ°λ§€ νλ£¨ μ  μ΄λ©μΌλ‘ λ°λ§€ μ λ³΄λ₯Ό λ€μ μλ € λλ¦½λλ€.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
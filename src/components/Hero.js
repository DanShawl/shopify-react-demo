import React from 'react';
import {
  Box,
  Button,
  Text,
  Image,
  Center,
  Heading,
  Flex,
} from '@chakra-ui/react';
import hero1 from '../assets/boyswillbe-hero2.jpg';

const Hero = () => {
  return (
    <Flex
      pb="6rem"
      // backgroundColor={'#F6F1EB'}
      backgroundColor={'#FFF'}
      w="100%"
      position={'relative'}
      h="100%"
      flexDir="column"
      // flexDir={['column', null, 'column-reverse']}
    >
      <Image
        m={'0 auto'}
        filter="grayscale(100%)"
        w="100%"
        src={hero1}
        // h={['50vh', null, '70%']}
        h="100vh"
        maxH="700px"
        // objectFit={['cover', null, 'contain']}
        objectFit="cover"
        // objectPosition={'bottom'}
        p={['0', '1rem', '2rem']}
      />
      <Box
        display={'flex'}
        flexDirection="column"
        // justifyContent={'center'}
        alignItems={'center'}
        color={'#FFF'}
        // textShadow="dark-lg"
        position={'absolute'}
        top="45%"
        w={'100%'}
        textAlign="center"
      >
        {/* <Heading fontWeight={'semibold'}>BOYS WILL BE</Heading> */}
        <Button
          // w={'150px'}
          w={'200px'}
          color="#1a202c"
          backgroundColor="#FFF"
          // backgroundColor={'transparent'}
          borderRadius="0"
          fontWeight="medium"
          _hover={{ opacity: '95%' }}
          fontSize="16px"
          // py="1.5rem"
          // pb="0"
          // mb={'0'}
          // borderBottom={'1.5px solid #fff'}
          mb={'.5rem'}
        >
          SHOP THE BRAND
        </Button>
        <Button
          // w={'150px'}
          w={'125px'}
          color="#FFF"
          // backgroundColor="#FFF"
          backgroundColor={'transparent'}
          borderRadius="0"
          fontWeight="medium"
          _hover={{ opacity: '95%' }}
          fontSize="16px"
          // py="1.5rem"
          // pb="0"
          // mb={'0'}
          borderBottom={'1.5px solid #fff'}
        >
          LEARN MORE
        </Button>
      </Box>
      {/* <Box
        px={['1rem', '1rem', '2rem']}
        m={'0 auto'}
        textAlign={['left', 'left', 'center']}
      >
        <Heading
          // w={[null, null, '800px']}
          as="h1"
          fontSize={['40px', '105px', '100px', '120px']}
          lineHeight="1"
          textAlign={'center'}
          fontWeight={'light'}
          py="1rem"
          p={'2rem 0 1rem'}
        >
          BOYS WILL BE
        </Heading>
       
      </Box>
      <Text
        // order={['3', '3', '1']}
        px={['1rem', '1rem', '2rem']}
        pb="2rem"
        textAlign={'center'}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        laboriosam eveniet et quisquam excepturi obcaecati, quas non a iure
        incidunt.
      </Text>
      <Center
      // order={['3', '3', '1']} px={['1rem', '1rem', '2rem']}
      >
        <Button
          w={'150px'}
          color="#1a202c"
          backgroundColor={'transparent'}
          borderRadius="0"
          fontWeight="normal"
          _hover={{ opacity: '95%' }}
          // py="1.5rem"
          borderBottom={'1.5px solid #1a202c'}
        >
          Shop the brand
        </Button>
      </Center> */}
    </Flex>
  );
};

export default Hero;

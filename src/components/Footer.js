import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Text, Image, VStack, Icon } from '@chakra-ui/react';
import { MdPolymer } from 'react-icons/md';

const Footer = () => {
  return (
    <Box
      // backgroundColor={'#1a202c'}
      backgroundColor={'#fff'}
      // color="white"
      color="#1a202c"
      p={'2rem 0'}
      // zIndex="2"
      borderTop="1px solid #eee"
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        alignItems="center"
        pb={'2rem'}
        // zIndex="2"
      >
        {/* <Icon
          fill="white"
          as={MdPolymer}
          cursor="pointer"
          w={50}
          h={50}
          m="0 auto"
        ></Icon> */}
        <VStack
          p={'1rem'}
          fontSize="12px"
          alignItems="flex-start"
          // zIndex="2"
          // backgroundColor={'#1a202c'}
        >
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Sustainability</Link>
        </VStack>
      </Grid>
      <Box
        borderTop={'1px solid white'}
        p={['0 1rem', '0 3rem']}
        fontSize={['xs', 'sm']}
        pt={'2rem'}
      >
        <VStack>
          <Text pb={'1rem'}>
            DISCLAIMER <br />
            Please be aware that our efforts to maintain accessibility and
            usability are ongoing. While we strive to make the Website as
            accessible as possible some issues can be encountered by different
            assistive technology as the range of assistive technology is wide
            and varied.
          </Text>
          <Text pb={'1rem'}>
            CONTACT US <br />
            If, at any time, you have specific questions or concerns about the
            accessibility of any particular webpage on this Website, please
            contact us at accessibility@highsnobiety.com, +49 (0)30 235 908 500.
            If you do encounter an accessibility issue, please be sure to
            specify the web page and nature of the issue in your email and/or
            phone call, and we will make all reasonable efforts to make that
            page or the information contained therein accessible for you. If, at
            any time, you have specific questions or concerns about the
            accessibility of any particular webpage on this Website, please
            contact us at accessibility@highsnobiety.com, +49 (0)30 235 908 500.
          </Text>
        </VStack>
      </Box>

      {/*  */}
      {/*  */}
    </Box>
  );
};

export default Footer;

import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import {
  Badge,
  Box,
  Flex,
  Icon,
  Image,
  Text,
  Show,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import bwbLogo from '../assets/boyswillbe-logo.jpg';
import { BsList, BsHandbag, BsChevronRight, BsBag } from 'react-icons/bs';

const NavBar = () => {
  const { openCart, openMenu, checkout, isMenuOpen, closeMenu } =
    useContext(ShopContext);

  return (
    <Flex
      // backgroundColor="#F6F1EB"
      backgroundColor="#FFFFFF"
      flexDir={['row', 'row', 'column']}
      justifyContent="space-between"
      alignItems={['center', null, 'flex-start']}
      p=".5rem 1.25rem"
      // borderBottom="1px solid #5a5a5a"
      position={'sticky'}
      top="0"
      left="0"
      zIndex={'100000'}
    >
      <Box display={'flex'} alignItems="center">
        <Link to="/">
          <Image src={bwbLogo} w="30px" h={'30px'} />
        </Link>
        {/* <Link to={'/'}>
          <Text fontSize={'12px'} fontWeight="medium">
            BOYS WILL BE
          </Text>
        </Link> */}
      </Box>

      <Flex
      // alignItems={'center'}
      >
        <Show above="lg">
          <UnorderedList
            pt={'4rem'}
            listStyleType={'none'}
            fontSize="12px"
            fontWeight={'semibold'}
          >
            <ListItem pb={'.5rem'}>
              <Link to="/">SHOP BAGS</Link>
            </ListItem>
            <ListItem pb={'.5rem'}>
              <Link to="/">SHOP HOODIES</Link>
            </ListItem>
            <ListItem pb={'.5rem'}>
              <Link to="/">RESOURCES</Link>
            </ListItem>
            <ListItem pb={'.5rem'}>
              <Link to="/">SUPPORT</Link>
            </ListItem>
            <br />
            <ListItem pb={'.5rem'}>
              <Link to="/">INSTAGRAM</Link>
            </ListItem>
            <ListItem pb={'.5rem'}>
              <Link to="/">TIKTOK</Link>
            </ListItem>
            <ListItem pb={'.5rem'}>
              <Link to="/">FACEBOOK</Link>
            </ListItem>
          </UnorderedList>
        </Show>

        <Show below="lg">
          <Box justifySelf={'right'}>
            <Icon
              p={'0 .2rem'}
              mr={'.5rem'}
              fill="#1a202c"
              as={BsBag}
              cursor="pointer"
              w={25}
              h={25}
              // color="#292721"
              // color="#4f4f4d"
              color="#1a202c"
              onClick={() => openCart()}
            ></Icon>
            <Badge
              onClick={() => openCart()}
              backgroundColor="#1a202c"
              color="white"
              fontSize={'8px'}
              ml="-1rem"
              mr="0.5rem"
            >
              {checkout.lineItems?.length ? checkout.lineItems?.length : null}
            </Badge>
          </Box>
          {isMenuOpen ? (
            <Icon
              // pt={'.1rem'}
              mt={'.1rem'}
              p={'.2rem'}
              // fill="#5A5A5A"
              fill="#1a202c"
              as={BsChevronRight}
              cursor="pointer"
              w={25}
              h={25}
              color="#1a202c"
              onClick={() => closeMenu()}
            ></Icon>
          ) : (
            <Icon
              // pt={'.1rem'}
              mt={'.1rem'}
              p={'.2rem'}
              // fill="#5A5A5A"
              fill="#1a202c"
              as={BsList}
              cursor="pointer"
              w={25}
              h={25}
              color="#1a202c"
              onClick={() => openMenu()}
            ></Icon>
          )}
        </Show>
      </Flex>
    </Flex>
  );
};

export default NavBar;

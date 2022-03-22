import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  UnorderedList,
  ListItem,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  Box,
  VStack,
  Show,
} from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);

  return (
    <Drawer
      isOpen={isMenuOpen}
      onClose={closeMenu}
      placement="right"
      size="sm"
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent px={'.5rem'}>
        <DrawerCloseButton />
        {/* <DrawerHeader>BOYS WILL BE</DrawerHeader> */}

        <DrawerBody p={'0'}>
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
        </DrawerBody>

        <DrawerFooter textAlign="center">
          <Text w="100%">Copyright www.boyswill.com</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMenu;

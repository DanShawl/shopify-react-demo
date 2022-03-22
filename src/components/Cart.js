import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  Link,
  Box,
  Heading,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        // placement={['bottom', 'right']}
        placement="right"
        onClose={closeCart}
        size={'sm'}
        autoFocus={false}

        // finalFocusRef={btnRef}
        // w={[null, null, '100px']}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#FFF">
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>YOUR BAG</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? (
              <Text fontWeight={'medium'}>
                {checkout.lineItems?.length} ITEMS
              </Text>
            ) : null}
            {/* <Input placeholder="Type here..." /> */}

            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={[1, 0]}
                  key={item.id}
                  // p="1rem"
                  // backgroundColor={'#faf8f5'}
                  my=".75rem"
                >
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    pr={'.5rem'}
                  >
                    <Image src={item.variant?.image.src} />
                  </Flex>
                  {/* minWidth="max-content" */}
                  <Flex flexDir={'column'}>
                    <Text
                      casing="uppercase"
                      fontWeight="bold"
                      fontSize={'12px'}
                      mb="1rem"
                    >
                      {item.title}
                    </Text>
                    <Text fontSize={'12px'} textTransform="uppercase">
                      {item.variant?.selectedOptions[0].name}{' '}
                      <strong>{item.variant?.title}</strong>
                    </Text>
                    <Text fontSize={'12px'}>
                      QUANTITY <strong>{item.quantity}</strong>
                    </Text>
                  </Flex>
                  {/* <Flex alignItems="center" justifyContent="center">
                    <Text>{item.variant.price}</Text>
                  </Flex> */}
                  <Flex
                    alignItems="flex-end"
                    flexDir="column"
                    // justifyContent={'space-between'}
                  >
                    <Text fontSize={'12px'} mb="1rem">
                      $ {item.variant?.price}
                    </Text>
                    <Text
                      onClick={() => removeLineItem(item.id)}
                      cursor="pointer"
                      color="gray"
                      fontSize={'12px'}
                    >
                      Remove
                    </Text>
                    {/* <CloseIcon
                      onClick={() => removeLineItem(item.id)}
                      cursor="pointer"
                    /> */}
                  </Flex>

                  {/* <Flex justifyContent="flex-start">
                    <Image src={item.variant.image.src} />

                    <Text>{item.title}</Text>

                    <Text>{item.variant.price}</Text>
                    <CloseIcon />
                  </Flex> */}
                </Grid>
                // <Heading>Order Summary</Heading>
                // <Heading>Need Help? Call us.</Heading>
              ))
            ) : (
              <Box
                h="100%"
                w="100%"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  // h="100%"
                  // display="flex"
                  // flexDir="column"
                  // alignItems="center"
                  // justifyContent="center"
                  fontSize={'12px'}
                >
                  YOUR BAG IS EMPTY.
                </Text>
                <Button
                  w={'150px'}
                  color="#1a202c"
                  backgroundColor={'transparent'}
                  borderRadius="0"
                  fontWeight="normal"
                  _hover={{ opacity: '95%' }}
                  // py="1.5rem"
                  textDecor="underline"
                  fontSize="12px"
                  onClick={closeCart}
                >
                  START SHOPPING
                </Button>
              </Box>
            )}
          </DrawerBody>

          {checkout.lineItems?.length ? (
            <DrawerFooter flexDir={'column'}>
              {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button> */}

              <Button
                // letterSpacing={'widest'}
                mt={'2rem'}
                // colorScheme="blue"
                // backgroundColor="#1a202c"
                backgroundColor="#1a1a1a"
                color="white"
                w="100%"
                borderRadius="0%"
                // fontWeight="normal"
                _hover={{ opacity: '95%' }}
                fontWeight="medium"
                letterSpacing={'1px'}
                fontSize={'12px'}
                mb=".5rem"
              >
                <Link href={checkout.webUrl} w="100%">
                  PROCEED TO CHECKOUT
                </Link>
              </Button>
              <Button
                w={'150px'}
                color="#1a202c"
                backgroundColor={'transparent'}
                borderRadius="0"
                fontWeight="normal"
                _hover={{ opacity: '95%' }}
                // py="1.5rem"
                textDecor="underline"
                fontSize="12px"
                onClick={closeCart}
              >
                CONTINUE SHOPPING
              </Button>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;

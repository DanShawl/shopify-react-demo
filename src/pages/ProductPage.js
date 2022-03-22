import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center,
  Spinner,
  Tag,
  TagLeftIcon,
  TagLabel,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { MdCircle } from 'react-icons/md';

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product, products } =
    useContext(ShopContext);

  useEffect(() => {
    // if (!product) return;
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  if (!product.title)
    return (
      <Flex p="10rem" alignItems="center" justifyContent="center">
        Loading...
      </Flex>
    );
  return (
    <Box p={['0rem', '2rem']} backgroundColor="#F6F1EB" color="#1a202c">
      <Grid
        templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2, 1fr)']}
        m="auto"
      >
        <Image src={product.images[0].src} />
        <Box
          p={['1.5rem', '1.5rem', '0 2rem']}
          // mt="621px"
          zIndex={'2'}
          // backgroundColor="#F6F1EB"
          backgroundColor="#FFFFFF"
        >
          <Text fontSize={'12px'} textTransform="uppercase">
            {product.productType}
          </Text>
          <Heading
            // pb="1.8rem"
            pb="1rem"
            textTransform={'uppercase'}
            // letterSpacing="1px"
            letterSpacing=".5px"
            // fontWeight={'normal'}
            fontWeight={'semibold'}
            // fontSize="28px"
            fontSize="16px"
          >
            {product.title}
          </Heading>
          <Flex
            justifyContent={'space-between'}
            alignItems="center"
            pb={'.5rem'}
          >
            <Text fontWeight="medium">$ {product.variants[0].price}</Text>
            <Tag variant="subtle" backgroundColor={'transparent'}>
              <TagLeftIcon
                boxSize="10px"
                as={MdCircle}
                color={product.availableForSale ? 'green.300' : 'red.500'}
              />
              <TagLabel fontSize={'12px'}>
                {product.availableForSale ? 'IN STOCK' : 'OUT OF STOCK'}
              </TagLabel>
            </Tag>
          </Flex>
          {/* <Text fontWeight="medium">${product.variants[0].price}</Text> */}
          <Button
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            w="100%"
            borderRadius="0%"
            m="1rem 0"
            // backgroundColor="#1a202c"
            backgroundColor="#1a1a1a"
            color="white"
            _hover={{ opacity: '95%' }}
            fontWeight="medium"
            letterSpacing={'1px'}
            fontSize={'12px'}
          >
            {product.availableForSale ? 'PLACE IN BAG' : 'PLACE ON BACKORDER'}
          </Button>
          <Text
            color="gray.600"
            fontSize={'12px'}
            textTransform="uppercase"
            lineHeight={'1'}
          >
            {product.description}
          </Text>
          <Box mt={'2rem'}>
            <Heading fontSize={'12px'} fontWeight="semibold" mb={'.5rem'}>
              PRODUCT DETAILS
            </Heading>
            <UnorderedList listStyleType={'none'} color="gray.600">
              <ListItem fontSize={'12px'} textTransform="uppercase">
                - Dark Gray
              </ListItem>
              <ListItem fontSize={'12px'} textTransform="uppercase">
                - Adustable Strap
              </ListItem>
              <ListItem fontSize={'12px'} textTransform="uppercase">
                - Made in the United States
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductPage;

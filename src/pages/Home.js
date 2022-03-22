import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image, Spinner, Flex } from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import Hero from '../components/Hero';
import Slider from '../components/Slider';

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products)
    return (
      <Flex p="10rem" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Flex>
      // <div className="">
      //   <Spinner />
      // </div>
    );

  return (
    <Box backgroundColor="#FFF">
      <Hero />
      <Slider />

      {/* <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: '80%' }} textAlign="center">
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>{product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid> */}
    </Box>
  );
};

export default Home;

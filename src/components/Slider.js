import React, { useEffect, useRef, useState, useContext } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../components/Slider.css';
import { ShopContext } from '../context/shopContext';

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="slider-component">
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {products.map((product) => {
            return (
              <Link to={`/products/${product.handle}`} key={product.id}>
                <motion.div className="item">
                  <img src={product.images[0].src} />
                  <h3>{product.title}</h3>
                  <p>${product.variants[0].price}</p>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>

      {/* <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: '80%' }} textAlign="center">
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>{product.variants[0].price}</Text>
            </Box>
          </Link> */}
    </div>
  );
};

export default Slider;

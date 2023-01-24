import React from 'react';
import { Box, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel2() {
 

 

  return (
    <Box
     w='100%'
      >
      <Image w='100%' src='https://img7.hkrtcdn.com/21393/bnr_2139276_o.jpg'/>
      
    </Box>
  );
}
import {
    Flex,

    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
  } from '@chakra-ui/react';

  import { FiShoppingCart } from 'react-icons/fi';
  
 

  
//   function Rating({ rating, numReviews }) {
//     return (
//       <Box d="flex" alignItems="center">
//         {Array(5)
//           .fill('')
//           .map((_, i) => {
//             const roundedRating = Math.round(rating * 2) / 2;
//             if (roundedRating - i >= 1) {
//               return (
//                 <BsStarFill
//                   key={i}
//                   style={{ marginLeft: '1' }}
//                   color={i < rating ? 'teal.500' : 'gray.300'}
//                 />
//               );
//             }
//             if (roundedRating - i === 0.5) {
//               return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
//             }
//             return <BsStar key={i} style={{ marginLeft: '1' }} />;
//           })}
//         <Box as="span" ml="2" color="gray.600" fontSize="sm">
//           {numReviews} review{numReviews > 1 && 's'}
//         </Box>
//       </Box>
//     );
//   }
  
export default function Productitem({product_title,product_price,product_photo,product_star_rating}) {
    return (
      <Flex  w="20%" alignItems="center"  justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="md"
          maxH={'md'}
          p='10px'
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          
          >
          
          <Image
          
            m='auto'
            w='90px'
            objectFit={'cover'}
            src={product_photo}
            alt={`Picture of ${product_title}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {product_title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Text fontSize={'2xl'}> ⭐{product_star_rating} </Text>
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                ₹
                </Box>
                {product_price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  


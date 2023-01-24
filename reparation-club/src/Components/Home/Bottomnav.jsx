import { Flex, Text } from '@chakra-ui/react'
import React from 'react'


export default function Bottomnav() {
  return (
    <div>
        <Flex border={'0px'} columnGap='5px'  justifyContent={'space-around'}>
          <Text fontSize={'3xl'}>
            Brands
          </Text>
          <Text fontSize={'3xl'}>
            Category
          </Text>
          <Text fontSize={'3xl'}>
            All Products
          </Text>
          <Text fontSize={'3xl'}>
            Best-Seller
          </Text>
          <Text fontSize={'3xl'}>
            Deals
          </Text>
          <Text fontSize={'3xl'}>
            Gift-Card
          </Text>
          <Text fontSize={'3xl'}>
            Blog,Videos & More
          </Text>
          <Text fontSize={'3xl'}>
            My Accounts & Orders
          </Text>
        </Flex>
    </div>
  )
}

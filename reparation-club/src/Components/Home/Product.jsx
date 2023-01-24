import { Flex } from '@chakra-ui/react'
import React from 'react'
import Productitem from './Productitem'

export default function Product({data=[]}) {
  return (
    <div>
        <Flex p='20px' justifyContent={'space-around'} columnGap='10px'>
            {
                data.map((el)=>(<Productitem key={el.id} {...el}/>))
            }
        </Flex>
    </div>
  )
}

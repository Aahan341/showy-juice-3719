import { Flex } from '@chakra-ui/react'
import React from 'react'
import Adertisecard from './Adertisecard'

export default function Advertise({data=[]}) {
  return (
    <div>
        <Flex   columnGap={'10px'} justifyContent={'space-around'} p='20px'>
            {
                data.map((el)=>(<Adertisecard {...el}/>))
            }
        </Flex>
    </div>
  )
}

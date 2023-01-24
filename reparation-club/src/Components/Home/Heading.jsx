import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Titled({Title}) {
  return (
    <div>
        <Box p='20px' textAlign={'center'}>
            <Heading fontSize={'6xl'}>{Title}</Heading>
        </Box>
    </div>
  )
}

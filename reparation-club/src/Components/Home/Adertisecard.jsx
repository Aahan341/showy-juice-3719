import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function Adertisecard({img_url,caption}) {
  return (
    <div>
        <Box>
            <Image src={img_url} alt={caption}/>
        </Box>
    </div>
  )
}

// import React from 'react'

import {
  Flex,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
// import styles from "../css/topnavbar.module.css";
import {  BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {  MdPersonOutline } from "react-icons/md";
import Login from "../Login/Login";
import { Authcontext } from "../../Context/Auth";
import { useContext } from "react";








export const TopNavbar = () => {
  const { authstate,logout } = useContext(Authcontext);

  const { isAuth}=authstate
    console.log(isAuth)
  return (
    <div >
      <Flex
        justifyContent={"space-around"}
        alignItems="center"
        width="100%"
        border={'0px'}
        height="70px"
        boxShadow='base' p='6' rounded='md' bg='white'
        mb='20px'

      >
        
        <Box
          display={{ base: "none", md: "block" }}
          w={'20%'}
          border={'0'}
          
        >
          
          <Image
            w='80%'
            src={"https://i.ibb.co/mcy9WKg/healthkart-logo-2.png"}
            alt="NutriBest"
          ></Image>
        </Box>
     
        <Flex        
          w={["30%"]}
          h="35"
        >
          
          <InputGroup border={'0px'} justifyContent='space-between'>
            <InputLeftElement
              border={'1px'}
              w='10%'
              h='100%'
              children={<BsSearch color="gray.300"  boxSize={"10px"}   />}
        
            />
            <Input
              type="text"
              placeholder="Search for products "
              fontSize={'3xl'}
              border={'1px'}
              pl='80px'
              h="100%"
              w='90%'
            />        
          </InputGroup>
        </Flex>
       
        <Flex justifyContent="space-evenly" w={["50%", "15%"]} h="35">
          <Box>
            {
              isAuth?<Button p='15px' color='white' bg='teal.400'_hover={{bg:'teal'}} onClick={()=>{logout()}}>Logout</Button>:<Login/>
            }
          
          </Box>
          <Box w="30%" border="none" background="none" fontSize="28px">           
              <AiOutlineShoppingCart />        
          </Box>
        </Flex>
        
      </Flex>

  </div>
  )
}
export default TopNavbar;
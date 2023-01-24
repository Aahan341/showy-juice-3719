import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
    useToast,
  } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
export default function InputForm({submit}) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const toast = useToast()
   
    const submit2 = () => {
       
        if(email==='eve.holt@reqres.in'){

            submit(email,password)
            toast({
                containerStyle: {
                   padding:'20px'
                  },
                position: 'top',
                title: 'Login Successfull',
                status: 'success',
                duration: 1000,
                isClosable: true,
            })

        }else{
            toast({
                containerStyle: {
                    padding:'20px'
                  },
                position: 'top',
                title: 'Enter Correct Email or Password',
                status: 'error',
                duration: 1000,
                isClosable: true,
              })
        }

    
    };
  return (
    <div>
        <Stack
        w='300px'
        spacing={5}
        h='300px'
        
        py={6}
        px={6}
      >
        <Stack justifyContent={"center"} columnGap='10px' direction="column" alignItems={'center'}>
          <Box p='10p' w='150px'>
            <Image w="100%" objectFit={'cover'} alt="logo" src="https://i.ibb.co/mcy9WKg/healthkart-logo-2.png" />
          </Box>
          <Heading fontSize={"5xl"} textAlign={"center"}>
            Login
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w='100%'
          h='100%'
        >
          <Stack spacing={4} >
            {/* <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input onChange={onchange} value={signCreds.Name} name='Name' type='text' />
              </FormControl> */}

            <FormControl id="email" isRequired>
              <FormLabel fontSize={'2xl'}>Email address</FormLabel>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fontSize={'2xl'}
                name="Email"
                type="email"
                h='30px'
              />
            </FormControl>

            {/* <FormControl id="number" isRequired>
                <FormLabel>Mobile No.</FormLabel>              
                  <Input onChange={onchange} value={signCreds.Phone}  name='Phone' type='number' />
              </FormControl> */}

            <FormControl id="password" isRequired>
              <FormLabel fontSize={'2xl'}>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  fontSize={'2xl'}
                  name="Password"
                  h='30px'
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    h='30px'
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={8} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                h='30px'
                onClick={submit2}
                bg="teal.400"
                color={"white"}
                _hover={{
                  bg: "teal",
                }}
              >
                Submit
              </Button>
            </Stack>
           
          </Stack>
        </Box>
      </Stack>
    </div>
  )
}

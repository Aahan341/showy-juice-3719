import { Box, Button ,Flex,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,useDisclosure} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Authcontext } from '../../Context/Auth';
import InputForm from './InputForm'
import LoginCursol from './LoginCursol'



export default function Login() {
  
  const { authstate,login } = useContext(Authcontext);
  
  console.log(authstate)
  const submit = (email, password) => {
    fetch("https://reqres.in/api/login", {
      method: "Post",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.token) {
          login(res.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { isOpen, onOpen, onClose } = useDisclosure()
  
 
  return (
    <>
      <Button onClick={onOpen} p='15px' color='white' bg='teal.400'_hover={{bg:'teal'}}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody border={'0px'}>
            
            <Flex  alignItems='center'>
                <Box w='50%'display={{base:'none',md:'block'}} >
                    <LoginCursol/>
                </Box>
                <Box border={'0px'}>
                    <InputForm submit={submit}/>
                </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
  
}
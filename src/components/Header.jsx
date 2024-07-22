import React from 'react'
import { SlMenu } from "react-icons/sl";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Input, useDisclosure, VStack, HStack } from '@chakra-ui/react'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <Button 
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'9'}
        ref={btnRef}
        zIndex={2}
        onClick={onOpen} // Add onClick handler to open the drawer
      >
        <SlMenu size={'20'} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB </DrawerHeader>
          <VStack px={'2.5'} alignItems={"flex-start"}>
            <Button variant={"ghost"} colorScheme="purple">
              <a href="/">Home</a>
            </Button>
            <Button variant={"ghost"} colorScheme="purple">
              <a href="/videos">Videos </a>
            </Button>
            <Button variant={"ghost"} colorScheme="purple">
              <a href="/videos">Free Home</a>
            </Button>
            <Button variant={"ghost"} colorScheme="purple">
              <a href="/upload">Uploads Video</a>
            </Button>
          </VStack>

          <HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"} >
            <Button onClick={onclose} colorScheme="purple">
              <a href="/">Log In </a>
            </Button>
            <Button onClick={onclose} colorScheme="purple" variant={"outline"}>
              <a href="/">Sign Up </a>
            </Button>
          </HStack>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header

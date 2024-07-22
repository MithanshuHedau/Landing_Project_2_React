import { Container, HStack, VStack,Input,Button, calc } from '@chakra-ui/react'
import React from 'react'
import { IoIosCloudUpload } from "react-icons/io";

const Upload = () => {
  return (
    <div className=' bg-[#1e1b4b]'>
    <Container className='bg-[#1e1b4b] w-[200px]'   h={"100vh"} p={16}>
      <VStack color={"purple.500"} h={"full"} justifyContent={'center'} >
      <IoIosCloudUpload size={100}/>
      <form>
        <HStack>
          <Input required type={'file'} css={{"&::file-selector-button":{
            border: "none",
            width:"calc(100%+36px)",
            height:'100%',
            marginLeft:'-18px',
            // backgroundColor:'white',
            cursor:'pointer',
          }}} />
          <Button colorScheme='purple'>Upload</Button>
          Input
        </HStack>
      </form>
      </VStack>
    </Container>
    </div>
  )
}

export default Upload
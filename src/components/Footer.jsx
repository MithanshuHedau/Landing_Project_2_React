import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='p-5 flex max-sm:flex-col max-sm:text-center justify-between bg-black text-white min-h-[20px]'>
      <div className='flex max-sm:text-center items-center max-sm:gap-1 gap-2'>
        <p className='max-sm:text-center w-[100%]'> Subscribe to  Gaming Gens </p>
        <HStack>
          <Button colorScheme='purple' variant={'ghost'}>
          <FaLocationArrow />
          </Button>
        </HStack>
      </div>
      <HStack>
        <p className='max-sm:text-center w-[100%]'>© 2022 Gaming Gens. All rights reserved</p>
        <Button colorScheme='purple' variant={'ghost'}>
        <FaYoutube size={30} />
        </Button>
      </HStack>
    </div>
  )
}

export default Footer
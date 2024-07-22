import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img1 from '../assets/1.jpg'
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
const Home = () => {
  return (
    <div>
      <Carousel className='mt-[-33.5px] max-sm:mt-[-54.5px]'  autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <div className="h-[70vh]  max-sm:h-[60vh]  max-sm:mt-12 relative mt-8 w-[100%]">
          <img className="h-[100%] bg-cover bg-center" src={img1} alt="img1" />
          <h1 className="absolute top-[50%] left-[20%] max-sm:text-4xl max-sm:left-[10%] text-8xl font-mono font-bold text-slate-700">Watch The Future </h1>
        </div>
        <div className="h-[70vh] max-sm:h-[60vh]  max-sm:mt-12 relative mt-8 w-[100%]">
          <img className="h-[100%] bg-cover bg-center" src={img2} alt="img1" />
          <h1 className="absolute top-[50%] left-[20%] max-sm:text-4xl max-sm:left-[10%] text-8xl font-mono font-bold text-white">Future is Gaming</h1>
        </div>
        <div className="h-[70vh] max-sm:h-[60vh]  max-sm:mt-12 relative mt-8 w-[100%]">
          <img className="h-[100%] bg-cover bg-center" src={img3} alt="img1" />
          <h1 className="absolute top-[50%] left-[20%] max-sm:text-4xl max-sm:left-[10%] text-8xl font-mono font-bold text-white">Gaming on Console </h1>
        </div>
        <div className="h-[70vh] max-sm:h-[60vh]  max-sm:mt-12 relative mt-8 w-[100%]">
          <img className="h-[100%] bg-cover bg-center" src={img4} alt="img1" />
          <h1 className="absolute top-[50%] left-[20%] max-sm:text-4xl max-sm:left-[10%] text-8xl font-mono font-bold text-white">Night Life Cool  </h1>
        </div>
      </Carousel>

      <Container bgColor={'rgb(30 27 75)'} color={"#fff"}   maxW={'220vh'} minH={'100vh'} p="16">
        <Heading textTransform={'uppercase'} py={2} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>
          Services
        </Heading>

        <Stack h="full" p={"4"}  alignItems={'center'} direction={['column','row']}>
          {/* <Image src={img5}  /> */}
          <Image src={img5} h={["40","400"]} filter={'hue-rotate(-130deg)'}/>
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente placeat molestiae dignissimos possimus ad nulla natus dolor, repellat laborum, officiis repellendus iure. Laudantium, ipsam pariatur architecto praesentium inventore fugit veritatis illo delectus recusandae, accusantium vero laboriosam temporibus doloremque sed nam corrupti? Optio dolorem velit illo voluptatum nulla, fugit ipsa sequi natus labore? Vitae id porro consequuntur neque nisi? Eius, harum assumenda quas eaque alias eligendi aspernatur, commodi ipsa culpa illo aut praesentium labore ab quibusdam dolores ut architecto non blanditiis inventore quae aliquam cupiditate, accusamus nesciunt. Nam error voluptas hic saepe debitis, doloremque repellat eum impedit iusto! Ullam, magnam saepe heug ubfa.
          </Text>
        </Stack>
      </Container>

    </div>
  )
}

export default Home
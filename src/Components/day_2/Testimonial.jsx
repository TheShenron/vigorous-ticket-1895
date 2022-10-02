import React from 'react';
import TextimonialCase from "./TextimonialCase"
import { BsFillDiamondFill } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import { IndexOfSlide } from "../../dummyData/sliderData"
import { Container, Box, Text, Divider, Icon, Flex, Button, Spacer, Image } from "@chakra-ui/react"
import { useState } from 'react';
import { useEffect } from 'react';


function Testimonial(props) {

    const [count , setCount] = useState(0)
    const [slide , setSlide] = useState({})

    useEffect(()=>{
       setSlide( IndexOfSlide(count) )
    } , [count])


    return (
        <Container maxW="full" py={20}>
            <Box w="70%" m="auto" textAlign="center">
                <Text fontSize="2xl" fontWeight="600">What people are saying about Milaap</Text>

                <Flex justifyContent="center" w="40%" m="auto" mt={3}>
                    <Divider orientation='horizontal' w="30%" m="auto" p="1px" bg="red" />
                    <Icon as={BsFillDiamondFill} mx={1} />
                    <Icon as={BsFillDiamondFill} mx={2} transform="scale(1.5)" />
                    <Icon as={BsFillDiamondFill} mx={1} />
                    <Divider orientation='horizontal' w="30%" m="auto" p="1px" bg="red" />
                </Flex>
            </Box>

            <Flex w="80%" m="auto" mt={10} align="center">
                <Button colorScheme='blackAlpha' variant='ghost' onClick={
                    ()=>count === 0 ? setCount(3) : setCount(count-1)
                    }> <Icon as={BsArrowLeft} mr={2}/> Prev</Button>
                <Spacer />
                <TextimonialCase image={slide.image} name={slide.name} twitter={slide.twitter} review={slide.review} />
                <Spacer />
                <Button colorScheme='blackAlpha' variant='ghost' onClick={()=>{
                    count === 3 ? setCount(0) : setCount(count+1)
                }} >Next <Icon as={BsArrowRight} ml={2} /> </Button>
            </Flex>

            <Box mt={5}>
                <Text fontSize="lg" textDecoration="underline" textAlign="center" p={5}>See all reviews</Text>
            </Box>
        </Container>
    );
}

export default Testimonial;
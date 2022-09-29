import React from 'react';
import { ContactHeroImgage } from "../../Images/imageLink"
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react"

function ContactHeroImg(props) {
    return (
        <Container maxW="full" bg="#9C3353" color="white">
            <Flex w="80%" m="auto" py="6rem">
                <Box w="50%" mt={10}>
                    <Text fontSize="3xl" fontWeight="600">Contact us</Text>
                    <Text fontSize="xl" mt={2} fontWeight="500">We are here to help you and answer any questions you may have. Here is how to reach us!</Text>
                </Box>
                <Box w="50%">
                    <Image src={ContactHeroImgage} alt="ContactHeroImg" m="auto"/>
                </Box>
            </Flex>
        </Container>
    );
}

export default ContactHeroImg;
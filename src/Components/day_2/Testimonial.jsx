import React from 'react';
import { BsFillDiamondFill } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"

import { Container, Box, Text, Divider, Icon, Flex, Button, Spacer, Image } from "@chakra-ui/react"

function Testimonial(props) {
    return (
        <Container border="1px solid" maxW="full" py={20}>
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
                <Button colorScheme='blackAlpha' variant='ghost'> <Icon as={BsArrowLeft} mr={2} /> Prev</Button>
                <Spacer />
                <Flex w="50%" shadow="md" transform="translateX(50px)">
                    <Box position="absolute" top="15%" left="-120px" textAlign="center" p={3} bg="white" borderRadius={5} shadow="lg">
                        <Image
                            borderRadius='full'
                            boxSize='100px'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                            m="auto"
                            border="1px solid"
                        />
                        <Text fontSize="md" fontWeight="500">Pushpa Aman Singh</Text>
                        <Text fontSize="xs">@pushpaaman</Text>
                    </Box>
                    <Box>
                        <Text p="45px" pl={20} fontSize="lg">
                            The best news for fundraising in India! Will surely promote this in our network. Anoj Viswanathan, what a fabulous Independence Day gift and perfect timing for #GivingTuesdayIndia -#DaanUtsav campaigns!
                        </Text>
                    </Box>

                </Flex>
                <Spacer />
                <Button colorScheme='blackAlpha' variant='ghost'>Next <Icon as={BsArrowRight} ml={2} /> </Button>
            </Flex>

            <Box mt={5}>
                <Text fontSize="lg" textDecoration="underline" textAlign="center" p={5}>See all reviews</Text>
            </Box>
        </Container>
    );
}

export default Testimonial;
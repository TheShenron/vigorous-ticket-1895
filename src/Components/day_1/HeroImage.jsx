import React from 'react';
import { HeroImg } from '../../Images/imageLink';
import { BsArrowRightCircleFill } from "react-icons/bs"
import { BsMegaphoneFill } from "react-icons/bs"
import { BsFillDiamondFill } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { BsHeartFill } from "react-icons/bs"
import { BsFillEaselFill } from "react-icons/bs"
import { BsSunFill } from "react-icons/bs"
import { BsReddit } from "react-icons/bs"

import { Box, Button, Center, Container, Divider, Flex, Heading, Icon, Input, Spacer, Text } from "@chakra-ui/react"


function HeroImage(props) {
    return (
        <Container
            maxW="full"
            backgroundImage={`url(${HeroImg})`}
            backgroundRepeat="no-repeat"
            backgroundSize="45%"
            backgroundPosition="right -100px"
            mb={20}
        >
            <Box
                textAlign="center"
                mt={10}
            >
                <Button
                    bg="white"
                    shadow="base"
                    fontSize={18}
                    color="gray.600"
                    size="lg"
                    mt={10}
                    _hover="null"
                    _active="null"
                >
                    Get started with Milaap360 and win big this Daan Utsav
                    <Icon
                        as={BsArrowRightCircleFill} ml={3}
                        fontSize="1.5rem"
                        color="blackAlpha.800"
                    />
                </Button>
            </Box>



            <Box w="80%" m="auto" mt={10}>

                <Box>

                    <Text fontSize='4xl' fontWeight="600">Milaap</Text>
                    <Text fontSize='2xl' color="gray.500">Free Crowdfunding for India</Text>

                </Box>


                <Box maxW='45%' mt={10}>

                    <Text fontSize='xl'>Raise funds online for medical emergencies and social causes</Text>

                    <Button size='lg' borderRadius="full" px="8" my={2}>Start a fundraiser - it's FREE</Button>

                    <Flex>
                        <Box>
                            <Text fontSize='xl'>702,254+</Text>
                            <Text fontSize='xl' color="gray.500">Fundraisers</Text>
                        </Box>
                        <Spacer />
                        <Center height='60px'>
                            <Divider orientation='vertical' />
                        </Center>
                        <Spacer />
                        <Box>
                            <Text fontSize='xl'>Rs. 2117 Crores +</Text>
                            <Text fontSize='xl' color="gray.500">Raised</Text>
                        </Box>
                        <Spacer />
                        <Center height='60px'>
                            <Divider orientation='vertical' />
                        </Center>
                        <Spacer />
                        <Box>
                            <Text fontSize='xl'>84 lakhs +</Text>
                            <Text fontSize='xl' color="gray.500">Donations</Text>
                        </Box>
                    </Flex>
                </Box>


                <Box maxW='90%' mt={10} bg="white" borderRadius="5" shadow="md">
                    <Flex>
                        <Box bg="gray.300">
                            <Divider orientation='vertical' p="3px" borderRadius="full" />
                        </Box>
                        <Spacer />
                        <Box>
                            <Text fontSize="xl" mt={5}> <Icon
                                as={BsMegaphoneFill}
                                transform="rotate(-20deg) scale(1.7)"
                                position="relative"
                                top="10px"
                                mx="3"
                            />   Our crowdfunding platform charges NO fees</Text>
                        </Box>
                        <Spacer />
                        <Text fontSize='5xl' mr="2" color="gray.400" transform="translateY(-5px)" fontWeight="bold">0%</Text>
                    </Flex>
                </Box>

                <Box w="100%" textAlign="center" mt={10}>
                    <Text fontSize="2xl" fontWeight="bold" py={5}>Thousands are fundraising online on Milaap</Text>

                    <Flex justifyContent="center" w="40%" m="auto">
                        <Divider orientation='horizontal' w="30%" m="auto" p="1px" bg="red" />
                        <Icon as={BsFillDiamondFill} mx={1} />
                        <Icon as={BsFillDiamondFill} mx={2} transform="scale(1.5)" />
                        <Icon as={BsFillDiamondFill} mx={1} />
                        <Divider orientation='horizontal' w="30%" m="auto" p="1px" bg="red" />
                    </Flex>

                </Box>



                <Flex w="70%" m="auto" mt={10}>
                    <Input size='lg' borderRadius="100px 0 0 100px" placeholder='Search by fundraiser name, title, location, cause or other keywords' />
                    <Button size="lg" borderRadius="0 100px 100px 0"> <Icon as={BsSearch} /> </Button>
                </Flex>

                <Flex w="60%" m="auto" mt={10}>
                    <Box border="1px" textAlign="center" p={5} borderRadius={10}>
                        <Icon as={BsHeartFill} fontSize="2.5rem" />
                        <Text fontSize="xl"> Non-profits</Text>
                    </Box>
                    <Spacer />
                    <Box border="1px" textAlign="center" p={5} borderRadius={10}>
                        <Icon as={BsFillEaselFill} fontSize="2.5rem" />
                        <Text fontSize="xl"> Medical </Text>
                    </Box>
                    <Spacer />
                    <Box border="1px" textAlign="center" p={5} borderRadius={10}>
                        <Icon as={BsSunFill} fontSize="2.5rem" />
                        <Text fontSize="xl"> Memorial</Text>
                    </Box>
                    <Spacer />
                    <Box border="1px" textAlign="center" p={5} borderRadius={10}>
                        <Icon as={BsReddit} fontSize="2.5rem" />
                        <Text fontSize="xl"> 15-others</Text>
                    </Box>

                </Flex>



            </Box>

        </Container>
    );
}

export default HeroImage;


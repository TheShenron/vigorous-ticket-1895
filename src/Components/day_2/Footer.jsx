import React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import QRimage from "../../Images/QRImage.svg"
import { GooglePlay } from '../../Images/imageLink'; 
import { AppStore } from '../../Images/imageLink';

import { Container, Flex, Box, Text, Button, Icon, Image } from "@chakra-ui/react"

function Footer(props) {
    return (
        <Container maxW="full" shadow="dark-lg" p="0">
            <Flex px={10} py={20}>
                <Box w="15%">
                    <Text fontWeight="600">Donate towards</Text>
                    <Box>
                        <Text fontSize="xs" my={3}>Medical</Text>
                        <Text fontSize="xs" my={3}>Education</Text>
                        <Text fontSize="xs" my={3}>Memorial</Text>
                    </Box>
                </Box>
                <Box w="15%">
                    <Text fontWeight="600">Milaap</Text>
                    <Box>
                        <Text fontSize="sm" my={2}>About us</Text>
                        <Text fontSize="sm" my={2}>Press and media</Text>
                        <Text fontSize="sm" my={2}>Team</Text>
                        <Text fontSize="sm" my={2}>Careers</Text>
                        <Text fontSize="sm" my={2}>Contact</Text>
                        <Text fontSize="sm" my={2}>Board</Text>
                        <Text fontSize="sm" my={2}>Thank you</Text>
                    </Box>
                </Box>
                <Box w="20%">
                    <Text fontWeight="600">Indian office address</Text>
                    <Box>
                        <Text fontSize="sm" mt={2}>Milaap Social Ventures India Pvt. Ltd.</Text>
                        <Text fontSize="sm">ClayWorks Create - building,11th KM Create Campus,Arakere Bannerghatta Rd,
                            Bangalore, Karnataka, India 560076</Text>
                        <Text fontSize="sm" my={2}>Supported by</Text>
                    </Box>
                </Box>
                <Box w="35%" textAlign="center" px={10}>
                    <Button borderRadius="full" w="100%" size="lg">Start a fundraiser</Button>
                    <Flex justify="center" mt={5}>
                        <Text fontSize="sm" mx={2}>Pricing</Text>
                        <Text fontSize="sm" mx={2}> Reviews</Text>
                        <Text fontSize="sm" mx={2}> FAQs and tips</Text>
                    </Flex>

                    <Flex justify="center" mt={10}>
                        <Text fontSize="sm" mx={2}>Find us on</Text>
                        <Icon as={BsFacebook} mx={1} />
                        <Icon as={BsTwitter} mx={1} />
                        <Icon as={BsLinkedin} mx={1} />
                        <Icon as={BsInstagram} mx={1} />
                        <Icon as={BsYoutube} mx={1} />

                    </Flex>
                </Box>
                <Box>
                    <Flex w="100%" m="auto" borderRadius="0 0 50px 50px" shadow="xs" bg="blackAlpha.50">
                        <Box w="50%">
                            <Image src={QRimage} alt='Dan Abramov' m="auto" w="150px" mt={5}/>
                        </Box>
                        <Box w="50%" p={2} pb={10} textAlign="center">
                            <Text fontSize="sm" mt={5}>Set up, manage and promote your fundraiser with Milaap app</Text>
                            <Text fontSize="sm" fontWeight="700" m={5}>Download Now!</Text>
                            <Image src={GooglePlay} alt="GooglePlayImage" w="150px" m="auto" p={2} />
                            <Image src={AppStore} alt="AppStoreImage" m="auto" w="150px" p={2} />

                        </Box>
                    </Flex>
                </Box>
            </Flex>

            <Flex justify="center" py={3} bg="blackAlpha.900" color="white">
                <Text fontSize="sm" mx={3}>Security & Privacy</Text>
                <Text fontSize="sm" mx={3}>Conditions of use </Text>
                <Text fontSize="sm" mx={3}>© 2010 - 2022 milaap.org. All rights reserved. </Text>

            </Flex>
        </Container>
    );
}

export default Footer;
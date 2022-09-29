import React from 'react';
import QRimage from "../../Images/QRImage.svg"
import { QR } from "../../Images/imageLink"
import { GooglePlay } from "../../Images/imageLink"
import { AppStore } from "../../Images/imageLink"
import { BsFillTelephoneFill } from "react-icons/bs"

import { Box, Button, Container, Flex, Icon, Image, Text } from "@chakra-ui/react"

function QRcode(props) {
    return (
        <Container maxW="full" mt={10} p="0">
            <Flex w="90%" m="auto" borderRadius={10} shadow="xs" _hover={{ shadow: "2xl" }}>
                <Box w="50%" p={10}>
                    <Image src={QRimage} alt='Dan Abramov' m="auto" w="300px" />
                </Box>
                <Box w="50%" p={10} textAlign="center">
                    <Text fontSize="2xl" fontWeight="600">Milaap app - fundraise and donate seamlessly!</Text>
                    <Text fontSize="md" mt={5}>Set up and manage your fundraiser or donate to different causes from your mobile at anytime and from anywhere</Text>
                    <Image src={QR} alt="QRImage" boxSize="150px" m="auto" mt={5} outline="3px solid" p={2} />
                    <Text fontSize="md" m={5}>Scan the QR Code to download app.</Text>
                    <Image src={GooglePlay} alt="GooglePlayImage" m="auto" p={2} />
                    <Image src={AppStore} alt="AppStoreImage" m="auto" p={2} />

                </Box>
            </Flex>

            <Box mt={10} py={5} bg="gray.100">
                <Box w="80%" m="auto" borderRadius={10} bg="white">
                    <Flex align="center" justify="center" py={3}>
                        <Text fontSize="xl">Need help to setup your free fundraiser?</Text>
                        <Button size="lg" borderRadius="full" mx={10}> <Icon as={BsFillTelephoneFill} mx={5} fontSize="1.5rem" /> Request a call</Button>
                    </Flex>
                </Box>
            </Box>



        </Container>
    );
}

export default QRcode;
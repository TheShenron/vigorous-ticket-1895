import React from 'react';
import { Box, Button, Container, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { halpingHand } from "../../Images/imageLink"
import { Donate_shop } from "../../Images/imageLink"
import { Donate_donate } from "../../Images/imageLink"
import { Donate_someone } from "../../Images/imageLink"
import { BsFillCaretDownFill } from "react-icons/bs"

function DonateBanner(props) {
    return (
        <>
            <Box w="90%" m="auto" borderRadius="0 0 10px 10px" border="2px solid rgb(237,242,247)" mb={5}>
                <Flex align="center" justify="center" py={3}>
                    <Text fontSize="xl">Thousands are crowdfunding for various causes. Support a fundraiser today.</Text>
                    <Image src={halpingHand} mx={5} />
                </Flex>
            </Box>

            <Box w="90%" m="auto" borderRadius="10px" border="1px solid rgb(237,242,247)" mb={5}>
                <Text textAlign="center" fontSize="2xl" fontWeight="500" my={3}>Shop to give</Text>
                <Flex align="center" justify="center" py={3} gap={3}>
                    <Box w="30%">
                        <Image src={Donate_shop} m="auto" />
                        <Text textAlign="center" fontSize="md" fontWeight="500" my={3}>You shop</Text>
                    </Box>
                    <Box w="30%">
                        <Image src={Donate_donate} m="auto" />
                        <Text textAlign="center" fontSize="md" fontWeight="500" my={3}>We donate</Text>
                    </Box>
                    <Box w="32%">
                        <Image src={Donate_someone} m="auto" />
                        <Text textAlign="center" fontSize="md" fontWeight="500" my={3}>You help someone</Text>
                    </Box>
                </Flex>

                <Flex my={3} justifyContent="center" align="center">
                    <Text color="teal" border="1px" m="auto" px="50px" py="10px">Shop Now <Icon as={BsFillCaretDownFill} fontSize="xl" position="relative" top="5px"
                    /></Text>
                </Flex>
            </Box>
        </>
    );
}

export default DonateBanner;
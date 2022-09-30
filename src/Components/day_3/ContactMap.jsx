import React from 'react';
import { BsPinMapFill } from "react-icons/bs"
import { BsWalletFill } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"
import { Container, Box, Text, Icon, Flex } from "@chakra-ui/react"
import Footer from "../day_2/Footer"


function ContactMap(props) {
    return (
        <>
            <Container maxW="full" mb={20}>
                <Box w="90%" m="auto">

                    <Flex align="center" py={5} borderBottom="2px solid #9C3353" w="30%">
                        <Icon as={BsPinMapFill} mx={20} transform="scale(1.5)" />
                        <Text fontSize="2xl"> INDIA </Text>
                    </Flex>

                    <Box mt={5}>
                        <Text fontSize="md" fontWeight="600">Milaap Social Ventures India Pvt. Ltd. ClayWorks Create – building,11th KM Create Campus, Arakere Bannerghatta Rd, Bangalore, Karnataka, India 560076</Text>
                        <Flex align="center" my={5}>
                            <Icon as={BsWalletFill} mr={3} />
                            <Text as="u"> feedback@mailap.org </Text>
                        </Flex>
                        <Flex align="center" my={5}>
                            <Icon as={BsFillTelephoneFill} mr={3} />
                            <Text> 9916174848 </Text>
                        </Flex>
                    </Box>

                    <Box mt={10}>
                        <iframe loading="lazy" src="https://maps.google.com/maps?q=Milaap%20Social%20Ventures%20India%20Pvt.%20Ltd.%20ClayWorks%20Create%20-%20building,11th%20KM%20Create%20Campus,Arakere%20Bannerghatta%20Rd,%20Bangalore,%20Karnataka,%20India%20560076&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
                    </Box>

                </Box>
            </Container>

            <Footer/>

        </>
    );
}

export default ContactMap;
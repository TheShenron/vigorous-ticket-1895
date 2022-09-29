import React from 'react';
import { Box, Container, Flex , Image} from "@chakra-ui/react"
import QRimage from "../../Images/QR"

function QRcode(props) {
    return (
        <Container border="1px solid" maxW="full">
            <Flex w="90%" m="auto">
                <Box w="50%">
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                </Box>
                <Box border="1px solid" w="50%">
                    asdf
                </Box>
            </Flex>
        </Container>
    );
}

export default QRcode;
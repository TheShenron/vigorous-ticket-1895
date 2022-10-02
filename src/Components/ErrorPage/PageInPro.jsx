import React from 'react';
import { BsFillGearFill } from "react-icons/bs"
import { Flex, Box, Container, Icon, Text } from '@chakra-ui/react';

function PageInPro(props) {
    return (
        <Container maxW="full">
            <Flex w="50%" m="auto" justify="center" align="center" pt={20} gap={5}>
                <Icon as={BsFillGearFill} fontSize="5rem"/>
                <Box textAlign="center">
                    <Text fontSize="5xl" >Work in Pregress!</Text>
                    <Text fontSize="xs" color="gray.400">SOON IT WILL LIVE</Text>
                </Box>
            </Flex>
        </Container>
    );
}

export default PageInPro;
import React from 'react';
import { BsFillEmojiNeutralFill } from "react-icons/bs"
import { Flex, Box, Container, Icon, Text } from '@chakra-ui/react';

function E404(props) {
    return (
        <Container maxW="full">
            <Flex w="50%" m="auto" justify="center" align="center" p={10} gap={5}>
                <Icon as={BsFillEmojiNeutralFill} fontSize="5rem"/>
                <Box textAlign="center">
                    <Text fontSize="5xl" >Oops!</Text>
                    <Text fontSize="sm" color="gray.500">Page Not Found</Text>
                </Box>
            </Flex>
        </Container>
    );
}

export default E404;
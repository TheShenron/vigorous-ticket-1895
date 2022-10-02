import React from 'react';
import { Container, Box, Text, Divider, Icon, Flex, Button, Spacer, Image } from "@chakra-ui/react"

function TextimonialCase({ image , name , twitter , review }) {
    return (
        <>
            <Flex w="50%" shadow="md" transform="translateX(50px)">
                <Box position="absolute" top="15%" left="-120px" textAlign="center" p={3} bg="white" borderRadius={5} shadow="lg">
                    <Image
                        borderRadius='full'
                        boxSize='100px'
                        src={image}
                        alt='tImg'
                        m="auto"
                        border="1px solid"
                    />
                    <Text fontSize="md" fontWeight="500">{name}</Text>
                    <Text fontSize="xs">{twitter}</Text>
                </Box>
                <Box>
                    <Text p="45px" pl={20} fontSize="lg">
                        {review}
                    </Text>
                </Box>

            </Flex>
        </>
    );
}

export default TextimonialCase;
import React from 'react';
import { Box, Button, ButtonGroup, Divider, Flex, Input, Text, Select } from '@chakra-ui/react';


function Filter({ sortLtH }) {

    const HandleSort = (order) => {
        sortLtH(order)
    }


    return (
        <>

            <Box w="25%" px={5} mb={10}>

                <Box>
                    <Box mb={2}>
                        <Text fontSize="2xl" fontWeight={500}>Filter</Text>
                    </Box>
                    <Divider />
                    <Box my={5}>
                        <Text fontSize="md" my={3}>PRICE</Text>
                        <Flex flexWrap="wrap" gap={2}>
                            <Button size="sm" onClick={() => HandleSort("def")}>Default</Button>
                            <Button size="sm" onClick={() => HandleSort("lth")}>Low To High</Button>
                            <Button size="sm" onClick={() => HandleSort("htl")} >High To Low</Button>
                        </Flex>
                    </Box>
                    <Box my={5}>
                        <Text fontSize="md" my={3}>RATING</Text>
                        <Flex flexWrap="wrap" gap={2}>
                            <Button size="sm">1+</Button>
                            <Button size="sm">2+</Button>
                            <Button size="sm">3+</Button>
                            <Button size="sm">4+</Button>
                        </Flex>
                    </Box>

                    <Box my={5}>
                        <Text fontSize="md" my={3}>BRAND</Text>
                        <Flex variant='outline' flexWrap="wrap" gap={2}>
                            <Button size="sm">Brand A</Button>
                            <Button size="sm">Brand B</Button>
                            <Button size="sm">Brand C</Button>
                            <Button size="sm">Brand D</Button>
                        </Flex>
                    </Box>

                </Box>
            </Box>

        </>
    );
}

export default Filter;
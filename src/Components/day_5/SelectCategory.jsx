import React from 'react';
import { Box, Button, ButtonGroup, Divider, Flex, Input, Text, Select } from '@chakra-ui/react';


function SelectCategory(props) {
    return (
        <>
            <Flex mt="50px" mb={3} justifyContent="flex-end" align="center">
                <Box w="25%" >
                    <Box w="90%" m="auto">
                        <Select placeholder='Select option'>
                            <option value='option1'> Grocery</option>
                            <option value='option2'> Electronic</option>
                            <option value='option3'>Appliances</option>
                            <option value='option3'>Toys</option>
                        </Select>
                    </Box>
                </Box>
                <Input w="75%" type='search' placeholder='Search for Products, brands and more' />
            </Flex>
        </>
    );
}

export default SelectCategory;
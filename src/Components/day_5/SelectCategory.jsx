import React from 'react';
import { Box, Button, ButtonGroup, Divider, Flex, Input, Text, Select } from '@chakra-ui/react';


function SelectCategory({HandlePage , Searchitem}) {
    
    const HandleChange = (e)=>{

        if(e.target.value == ""){
            HandlePage(1)
        }else{
            HandlePage(parseInt(e.target.value))
        }
    }

    const HandleSearch = (e)=>{
        Searchitem(e.target.value)
    }


    return (
        <>
            <Flex mt="50px" mb={3} justifyContent="flex-end" align="center">
                <Box w="25%" >
                    <Box w="90%" m="auto">
                        <Select placeholder='Select option' onChange={(e)=>HandleChange(e)}>
                            <option value='4'> Grocery</option>
                            <option value='6'> Electronic</option>
                            <option value='5'>Appliances</option>
                            <option value='9'>Toys</option>
                        </Select>
                    </Box>
                </Box>
                <Input w="75%" type='search' placeholder='Search for Products, brands and more' onInput={(e)=>HandleSearch(e)}/>
            </Flex>
        </>
    );
}

export default SelectCategory;
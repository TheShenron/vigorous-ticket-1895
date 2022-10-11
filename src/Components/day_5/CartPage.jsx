import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BsFillBagCheckFill } from "react-icons/bs"
import CartPageCard from './CartPageCard';

function CartPage(props) {

    return (
        <>
            <Box textAlign="center" py={5} w="90%">
                <Text fontSize="2xl" fontWeight="bold"> <Icon as={BsFillBagCheckFill} transform="scale(1.2)"/>  My Cart</Text>
            </Box>

            <Flex w="90%" m="auto"> 
                <CartPageCard/>
            </Flex>
        </>
    );
}

export default CartPage;
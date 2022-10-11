import { Box, Flex, Image, Select, Text, Button, Icon, Input, InputGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsFillShieldLockFill } from "react-icons/bs"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { remove } from "../../store/cartSlice"
import CartList from './CartList';




function CartPageCard() {

    const cartItem = useSelector(state => state.cart)
    
    const [total , setTotal] = useState(0)

    const dispatch = useDispatch()

    const HandleRemove = (id)=>{
        dispatch(remove(id))
    }

    const Handletotle = (val)=>{
        setTotal(val)
    }


    return (
        <>
            <Box w="65%">

                {cartItem.length === 0 ? <h1>No Product Avilable</h1> : cartItem.map((el ) => {
                    return <CartList data={el} HandleRemove={HandleRemove} Handletotle={Handletotle} dataList={cartItem}/>
                })}

            </Box>

            <Box w="35%" p={5}>
                <Text fontSize="sm" fontWeight="500" >ENTER PIN CODE</Text>
                <InputGroup pb={5} pt={2}>
                    <Input type='number' placeholder='PIN-CODE' borderRadius="none" />
                    <Button bg="black" color="white" px={10} borderRadius="none" _hover={{ background: "white", border: "1px", color: "teal" }}>Submit</Button>
                </InputGroup>
                <Box>
                    <Flex justify="space-between" py={2}>
                        <Text>Shipping Cost</Text>
                        <Text>TBD</Text>
                    </Flex>
                    <Flex justify="space-between" py={2}>
                        <Text>Discount</Text>
                        <Text>-0$</Text>
                    </Flex>
                    <Flex justify="space-between" py={2}>
                        <Text>Tex</Text>
                        <Text>TBD</Text>
                    </Flex>
                    <Flex justify="space-between" py={2}>
                        <Text fontWeight="bold">Esitmated Total</Text>
                        <Text fontWeight="bold">${cartItem.length===0?0:total}</Text>
                    </Flex>
                    
                    <Flex justify="flex-end" my={5}>
                        <Button colorScheme="green"> <Icon as={BsFillShieldLockFill} mr={2}/> Checkout</Button>
                    </Flex>

                </Box>
            </Box>
        </>
    );
}

export default CartPageCard;
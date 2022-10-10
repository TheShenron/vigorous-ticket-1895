import { Box, Flex, Image, Select, Text, Button, Icon, Input, InputGroup } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsFillShieldLockFill } from "react-icons/bs"
import { useSelector } from "react-redux"


const Card = (img, title, price, desc , HandleQTY) => (

    <Flex justify="space-evenly" p={5} shadow="xs" key={price*.5}>
        <Flex>
            <Box>
                <Image src={img} alt="ProductIMG" w="250px" borderRadius={5} />
            </Box>
            <Box px={3}>
                <Text fontWeight="bold" fontSize="md">{title}</Text>
                <Text color="gray" py={2}>{desc}</Text>
            </Box>
        </Flex>
        <Box>
            <Text fontWeight="bold">Each</Text>
            <Text py={2}> ${price}</Text>
        </Box>
        <Box>
            <Text fontWeight="bold">Quantity</Text>
            <Select py={2} size="sm" onChange={()=>HandleQTY()} className="opt">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </Select>
        </Box>
    </Flex>
)


function CartPageCard() {

    const cartItem = useSelector(state => state.cart)
    // console.log(cartItem)

    const [total , setTotal] = useState(0)

    const HandleQTY = ()=>{
        let list = document.querySelectorAll(".opt")
        let t = 0
        list.forEach((el,ind)=>{
            t += el.value*cartItem[ind].price
        })
        setTotal(t)
    }

    useEffect(()=>{
        HandleQTY()
    } , [])


    return (
        <>
            <Box w="65%">

                {cartItem.length === 0 ? <h1>No Product Avilable</h1> : cartItem.map(el => {
                    return Card(el.images[0], el.title, el.price, el.category.name , HandleQTY)
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
                        <Text fontWeight="bold">${total}</Text>
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
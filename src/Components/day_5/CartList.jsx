import React, { useEffect } from 'react';
import { Box, Flex, Image, Select, Text, Button, } from '@chakra-ui/react';


function CartList({data : d , HandleRemove , Handletotle , dataList}) {

    
    useEffect(()=>{
        findTotle()
    })
    
    const findTotle = ()=>{
        let list = document.querySelectorAll(".opt");
        console.log(list)
        let totle = 0;
        list.forEach((el,ind)=>{
            // totle += parseInt(el.value)
            console.log(el.value , dataList[ind].price )
            totle += parseInt(el.value) * dataList[ind].price 
        })
        // console.log(totle)
        Handletotle(totle)
    }



    return (
        <>
            <Flex justify="space-evenly" p={5} shadow="xs" key={d.id * .5}>
                <Flex>
                    <Box>
                        <Image src={d.images[0]} alt="ProductIMG" w="250px" borderRadius={5} />
                    </Box>
                    <Box px={3}>
                        <Text fontWeight="bold" fontSize="md">{d.title}</Text>
                        <Text color="gray" py={2}>{d.category.name}</Text>
                        <Button size="sm" variant='outline' onClick={() => {
                            HandleRemove(d.id)
                            
                        }}>Delete</Button>
                    </Box>
                </Flex>
                <Box>
                    <Text fontWeight="bold">Each</Text>
                    <Text py={2}> ${d.price}</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Quantity</Text>
                    <Select py={2} size="sm" className="opt" onChange={findTotle}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                </Box>
            </Flex>
        </>
    );
}

export default CartList;
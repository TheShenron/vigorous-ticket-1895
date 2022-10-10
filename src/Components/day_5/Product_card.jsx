import { Badge, Box, Button, Image } from '@chakra-ui/react';
import React from 'react';
import StarIcon from './StarIcon';

function Product_card({image , title , price , stars = parseInt( ( Math.random()*6 ) + 1) , reviewCount = parseInt( ( Math.random()*1001 ) + 1) }) {
    
    return (
        <>
            <Box maxW='sm' width="25%" flexGrow={1} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={image} alt={"d"} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {title}
                    </Box>

                    <Box>
                       $ {price}
                        <Box as='span' color='gray.600' fontSize='sm'>
                            / wk
                        </Box>
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < stars ? 'teal.500' : 'gray.300'}
                                />
                            ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {reviewCount} reviews
                        </Box>
                    </Box>
                    <Box mt="2">
                        <Button colorScheme="teal" size="sm">Donate</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Product_card; 
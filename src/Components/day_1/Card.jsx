import React from 'react';

import { Badge, Box, Center, CircularProgress, CircularProgressLabel, Container, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { cardList } from "../../dummyData/fakedata"

const cardDiv = (badge, image, title, percent, amount, createdby, details , ind) => {
    return (
        <Box w="30%" maxW="32%" shadow="md" borderRadius={5} flexGrow={1} key={ind+"CardDiv"+Math.random()*10}>
            <Box position="relative">
                {badge && <Badge position="absolute" top="0" left="0" variant='subtle' colorScheme='orange'>Default</Badge>}
                <Image src={image} alt='Dan Abramov' w="full" borderRadius={5} />
            </Box>

            <Box p={3} pb={5}>

                <Text> {title} </Text>
                <Flex my={3}>
                    <Flex w="100%">
                        <CircularProgress value={percent} color='green.400'>
                            <CircularProgressLabel> {percent} %</CircularProgressLabel>
                        </CircularProgress>
                        <Box>
                            <Text fontSize="sm">Raised</Text>
                            <Text fontSize="xl">₹{amount} </Text>
                        </Box>
                        <Spacer />
                        <Divider orientation='vertical' p="1px" h="50px" bg="gray.200" />
                        <Spacer />
                        <Box>
                            <Text fontSize="sm">Created by</Text>
                            <Text fontSize="md"> {createdby} </Text>
                        </Box>
                        <Spacer />
                    </Flex>
                    <Box>

                    </Box>
                </Flex>

                {details &&
                    <Flex bg="gray.100" borderRadius="3px">
                        <Divider orientation='vertical' p="1px" h="40px" bg="black" mr={2} />
                        <Text fontSize="sm">Receive tax benefits  by donating to this cause</Text>
                    </Flex>
                }

            </Box>

        </Box>
    )
}


function Card() {
    return (
        <Container maxW="85%" p="0">

            <Flex wrap="wrap" gap="30px">
                {cardList.map( (el,ind) => {
                    return (
                        cardDiv(el.badge, el.image, el.title, el.percent, el.amount, el.createdby, el.details , ind)
                    )
                })}
            </Flex>

            <Box>
                <Text fontSize="lg" textDecoration="underline" textAlign="center" p={5}>See more fundraisers</Text>
            </Box>

        </Container>
    );
}

export default Card;
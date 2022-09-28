import React from 'react';
import {
    Box,
    Button,
    Flex,
    Spacer,
    Image,
    Avatar,
    Switch,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
    Icon,
    Divider,
    Center
} from "@chakra-ui/react"
import { web_logo } from "../../../Images/imageLink"
import { Link } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs"


const Header = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' boxShadow='lg' >
            <Box mx={5}>
                <Link to="/">
                    <Image
                        src={web_logo}
                        alt="Web_logo"
                        w="100%"
                        h="40px"
                    />
                </Link>
            </Box>
            <Box py={5} px={3} mx={1} _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <Link to="/">Home</Link>
            </Box>
            <Box py={5} px={3} mx={1} _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <Link to="/donate">Donate</Link>
            </Box>
            <Box py={5} px={3} mx={1} _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <Link to="/lend">Lend</Link>
            </Box>
            <Box py={5} px={3} mx={1} _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <Link to="/pricing">Pricing</Link>
            </Box>
            <Box py={5} px={3} mx={1} _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <Link to="/contact">Contact us</Link>
            </Box>
            <Box py={5} px={3} mx={1}>
                <Switch size="lg" />
            </Box>
            <Spacer />
            <Box>
                <Button borderRadius="full" px="8" size="lg">Start a fundaraiser</Button>
            </Box>
            <Spacer />
            <Popover>
                <PopoverTrigger>
                    <Avatar as="Button" h={10} w={10} />
                </PopoverTrigger>
                <PopoverContent w="150px">
                    <PopoverArrow />
                    <PopoverBody>
                        <Flex>
                            <Link to="/login">Login</Link>
                            <Spacer />
                            <Center height='25px'>
                                <Divider orientation='vertical' />
                            </Center>
                            <Spacer />
                            <Link to="/register">Register</Link>
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Spacer />
        </Flex>
    );
};

export default Header;
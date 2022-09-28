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
    PopoverBody , 
    Icon, 
    Divider
} from "@chakra-ui/react"
import { web_logo } from "../../../Images/imageLink"
import { Link } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs"


const Header = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' border="1px solid" >
            <Box>
                <Image
                    src={web_logo}
                    alt="Web_logo"
                    w="100%"
                    h="40px"
                />
            </Box>
            <Box>
                <Link to="/">Home</Link>
            </Box>
            <Box>
                <Link to="/donate">Donate</Link>
            </Box>
            <Box>
                <Link to="/lend">Lend</Link>
            </Box>
            <Box>
                <Link to="/pricing">Pricing</Link>
            </Box>
            <Box>
                <Link to="/contact">Contact us</Link>
            </Box>
            <Box>
                <Switch colorScheme='red' />
            </Box>
            <Spacer/>
            <Box>
                <Button borderRadius="full" px="8">Start a fundaraiser</Button>
            </Box>
            <Spacer/>
            <Popover>
                <PopoverTrigger>
                    <Avatar as="Button" bg='teal.500' h={9} w={9}/>
                </PopoverTrigger>
                <PopoverContent w="150px">
                    <PopoverArrow />
                    <PopoverBody>
                        <Flex>
                            <Box>Login</Box>
                            <Spacer/>
                            <Divider orientation='vertical' />
                            <Box>Register</Box>
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Spacer/>
        </Flex>
    );
};

export default Header;
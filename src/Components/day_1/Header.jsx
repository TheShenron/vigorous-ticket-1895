import React, { useState } from 'react';
import { web_logo } from "../../Images/imageLink"
import { NavLink } from 'react-router-dom';
import styles from "../../colors.module.css"

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
    Center,
    Tooltip,
    Badge
} from "@chakra-ui/react"


const Header = () => {

    const [tooltips, setTooltips] = useState(false)
    const shows = (e) => {
        e.target.checked ? setTooltips("USD") : setTooltips("INR")
    }

    return (
        <Flex
            as="header"
            position="fixed"
            w='100%'
            alignItems='center'
            gap='2'
            boxShadow='lg'
            top={0}
            zIndex={1}
            bg="white">
            <Box
                mx={5}>
                <NavLink to="/">
                    <Image
                        src={web_logo}
                        alt="Web_logo"
                        w="100%"
                        h="40px"
                    />
                </NavLink>
            </Box>
            <Box
                py={5}
                px={3}
                mx={1}
                _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <NavLink to="/"
                    className={({ isActive }) => isActive ? styles.linkatv : styles.linkdeatv}
                    end
                >Home</NavLink>
            </Box>
            <Box
                py={5}
                px={3}
                mx={1}
                _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <NavLink to="/donate"
                    className={({ isActive }) => isActive ? styles.linkatv : styles.linkdeatv}
                    end
                >Donate</NavLink>
            </Box>
            <Box
                py={5}
                px={3}
                mx={1}
                _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <NavLink to="/lend"
                    className={({ isActive }) => isActive ? styles.linkatv : styles.linkdeatv}
                    end
                >Lend</NavLink>
            </Box>
            <Box
                py={5}
                px={3}
                mx={1}
                _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <NavLink to="/pricing"
                    className={({ isActive }) => isActive ? styles.linkatv : styles.linkdeatv}
                    end
                >Pricing</NavLink>
            </Box>
            <Box
                py={5}
                px={3}
                mx={1}
                _hover={{ backgroundColor: "rgb(245,245,245)" }}>
                <NavLink to="/contact"
                    className={({ isActive }) => isActive ? styles.linkatv : styles.linkdeatv}
                    end
                >Contact us</NavLink>
            </Box>
            <Box
                py={5}
                px={3}
                mx={1}>
                <Switch size="lg" onChange={(e) => shows(e)} />
                <Badge mx={1}>{tooltips}</Badge>
            </Box>
            <Spacer />
            <Box>
                <Button
                    borderRadius="full"
                    px="8"
                    size="lg"
                > <NavLink to="/funding">Start a fundaraiser</NavLink></Button>
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
                            <NavLink to="/login">Login</NavLink>
                            <Spacer />
                            <Center height='25px'>
                                <Divider orientation='vertical' />
                            </Center>
                            <Spacer />
                            <NavLink to="/register">Register</NavLink>
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Spacer />
        </Flex>
    );
};

export default Header;
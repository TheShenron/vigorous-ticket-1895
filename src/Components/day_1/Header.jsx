import React, { useState, useContext } from 'react';
import { web_logo } from "../../Images/imageLink"
import { NavLink } from 'react-router-dom';
import styles from "../../colors.module.css"
import { AppContext } from "../../contextProvider/ContextProvider"
import { LOGOUT } from '../../contextProvider/action';
import { BsFillCartFill } from "react-icons/bs"
import { useSelector } from "react-redux"

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
    Badge,
    Tag,
    Text
} from "@chakra-ui/react"


const Header = () => {

    const cartItem = useSelector((state) => state.cart)

    const { state, dispatch } = useContext(AppContext)

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
                > <NavLink to="/funding">Start a fundaraiser</NavLink>
                </Button>

            </Box>
            <Spacer />
            <Popover>
                <PopoverTrigger>
                    <Avatar as="Button" h={10} w={10} src={state.user.avatar} />
                </PopoverTrigger>
                {state.isAuth &&
                    <NavLink to="/cart">
                        <Button mx={2}>
                            <Icon as={BsFillCartFill} fontSize="2xl" color="#9C3353" />
                            <Text
                                position="absolute"
                                top={0}
                                right={0}
                                p={0}
                                width="22px"
                                height="22px"
                                lineHeight="22px"
                                borderRadius="full"
                                fontSize="xs"
                                bg="teal"
                                color="whiteAlpha.900"
                            >{cartItem.length}</Text>
                        </Button>
                    </NavLink>

                }

                <PopoverContent w="150px">
                    <PopoverArrow />
                    <PopoverBody>
                        {state.isAuth ? (
                            <Flex>
                                <Spacer />
                                <NavLink onClick={() => {
                                    dispatch({ type: LOGOUT })
                                }} to="/">Logout</NavLink>
                                <Spacer />
                            </Flex>
                        ) : (
                            <Flex>
                                <NavLink to="/login">Login</NavLink>
                                <Spacer />
                                <Center height='25px'>
                                    <Divider orientation='vertical' />
                                </Center>
                                <Spacer />
                                <NavLink to="/register">Register</NavLink>
                            </Flex>
                        )}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Spacer />
        </Flex>
    );
};

export default Header;
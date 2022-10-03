import React, { useContext, useRef , useState } from 'react';
import { LoginLogo } from "../../Images/imageLink"
import { Container, Image, Box, Flex, Text, Button, ButtonGroup, Divider, InputGroup, InputLeftAddon, Input, InputRightAddon, InputRightElement, Center, TagLabel, FormLabel, Avatar } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../../contextProvider/ContextProvider"
import axios from "axios"
import { START_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../../contextProvider/action"

const getLogin = (e, p) => {
    return axios({
        method: "POST",
        baseURL: "https://reqres.in/api/login",
        data: {
            email: "eve.holt@reqres.in",
            password: p
        }
    })
}


function RegisterComp(props) {


    const navigate = useNavigate()

    const { state, dispatch } = useContext(AppContext)
    const [UserIMG , setUserIMG] = useState("")
    const email = useRef(null)
    const pass = useRef(null)

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const HandleLogin = () => {
        if (email.current.value != "" && pass.current.value != "") {
            dispatch({ type: START_LOGIN })
            let e = email.current.value
            let p = pass.current.value
            getLogin(e, p)
                .then(d => {
                    dispatch({ type: LOGIN_SUCCESS, payload: {token : d.data.token , avatar : URL.createObjectURL(UserIMG[0])} })
                    navigate("/")
                })

                .catch(err => {
                    dispatch({ type: LOGIN_ERROR, payload: err })
                    console.log(err)
                })
                .finally(() => console.log("LoginREQ Done"))
        } else {
            alert("Fill All The Fields!")
        }
    }



    return (
        <Container maxW='full'>
            <Box w="80%" m="auto">
                <Flex align="center" p={5} pt={10}>
                    <Box w="25%" textAlign="center">
                        <Box w="90px" h="90px" borderRadius="full" overflow="hidden" m="auto">
                            <Image
                                src={LoginLogo}
                                alt="loginlogo"
                                bg="#A33555"
                                h="90px" w="90px"
                                objectFit="contain"
                                p={5}
                            />
                        </Box>
                        <Text fontSize="sm" fontWeight="600">Welcome to Milaap,</Text>
                        <Text fontSize="xs">India’s largest crowdfunding site</Text>
                    </Box>
                    <Center height='400px'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Box w="75%" textAlign="center">
                        <Text fontSize="sm" color="gray.500" >Sign up & manage fundraisers,</Text>
                        <Text fontSize="sm" color="gray.500" >donations & more</Text>

                        <Box w="50%" m="auto" mt={5} >

                            <Box my={5}>
                                <FormLabel m="auto" w="min-content" htmlFor="USERPIC" textAlign="center" cursor="pointer">
                                    <Avatar src={UserIMG && UserIMG.length && URL.createObjectURL(UserIMG[0])} size='xl'/>
                                </FormLabel>
                                <Input type="file" id="USERPIC" accept="image/*" display="none" onChange={(e)=>setUserIMG(e.target.files)} />
                            </Box>

                            <Input placeholder='Name' mb={5} />

                            <InputGroup size='md'>
                                <Input placeholder='Mobile number / Email ID' ref={email} />
                                <InputRightAddon as="button" children='Get otp' bg="white" />
                            </InputGroup>

                            <InputGroup size='md' my={5}>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    ref={pass}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <Box mt={10}>
                                <Button
                                    borderRadius="full"
                                    w="full"
                                    isLoading={state.loading}
                                    loadingText='Checking'
                                    onClick={HandleLogin}
                                >Register</Button>
                            </Box>

                        </Box>

                        <Box w="70%" m="auto" p={5} mt={10}>
                            <Flex borderRadius="5px" bg="blackAlpha.50" p={2} fontSize="sm" align="center" justify="center">
                                <Box>Already signed up with Milaap? </Box>
                                <Button mx={2} size="sm" borderRadius="full">
                                    <Link to="/login">Login</Link>
                                </Button>
                            </Flex>
                        </Box>


                    </Box>
                </Flex>
            </Box>
        </Container>
    );
}

export default RegisterComp;
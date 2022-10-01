import React from 'react';
import LoginComp from '../../Components/day_4/LoginComp';
import { Container } from '@chakra-ui/react';


function Login(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
           <LoginComp/>
        </Container>
    );
}

export default Login;
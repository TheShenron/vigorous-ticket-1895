import React from 'react';
import RegisterComp from "../../Components/day_4/RegisterComp"
import { Container } from '@chakra-ui/react';


function Register(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
            <RegisterComp />
        </Container>
    );
}

export default Register;
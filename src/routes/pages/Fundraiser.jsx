import React from 'react';
import PageInPro from "../../Components/ErrorPage/PageInPro"
import { Container } from '@chakra-ui/react';

function Fundraiser(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
            <PageInPro />
        </Container>
    );
}

export default Fundraiser;
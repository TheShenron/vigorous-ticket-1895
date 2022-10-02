import React from 'react';
import E404 from '../../Components/ErrorPage/E404';
import { Container } from '@chakra-ui/react';

function ERRORPAGE(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
            <E404 />
        </Container>
    );
}

export default ERRORPAGE;
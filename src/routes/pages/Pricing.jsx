import React from 'react';
import PageInPro from "../../Components/ErrorPage/PageInPro"
import { Container } from '@chakra-ui/react';
import Category from '../../Components/day_5/Category';

function Pricing(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
            {/* <PageInPro/> */}
            <Category/>
        </Container>
    );
}

export default Pricing;
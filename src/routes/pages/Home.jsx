import { Container } from '@chakra-ui/react';
import React from 'react';
import HeroImage from "../../Components/day_1/HeroImage"
import Card from "../../Components/day_1/Card"

function Home(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
            <HeroImage />
            <Card />
        </Container>
    );
}

export default Home;
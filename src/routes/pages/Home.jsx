import { Container } from '@chakra-ui/react';
import React from 'react';
import HeroImage from "../../Components/day_1/HeroImage"
import Card from "../../Components/day_1/Card"
import QRcode from '../../Components/day_2/QRcode';
import Testimonial from '../../Components/day_2/Testimonial';

function Home(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
            <HeroImage />
            <Card />
            <QRcode/>
            <Testimonial/>
        </Container>
    );
}

export default Home;
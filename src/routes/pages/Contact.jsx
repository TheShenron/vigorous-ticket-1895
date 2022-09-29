import React from 'react';
import ContactHeroImg from '../../Components/day_3/ContactHeroImg';
import ContactMap from '../../Components/day_3/ContactMap';
import { Container } from "@chakra-ui/react"

function Contact(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
            <ContactHeroImg />
            <ContactMap/>
        </Container>
    );
}

export default Contact
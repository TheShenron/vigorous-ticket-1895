import { Container } from '@chakra-ui/react';
import React from 'react';
import CartPage from '../../Components/day_5/CartPage';

function Cart(props) {
    return (
        <Container
            mt={70}
            maxW="full"
            p="0"
        >
           <CartPage />
        </Container>
    );
}

export default Cart;
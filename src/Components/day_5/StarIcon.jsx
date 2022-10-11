import { Icon } from '@chakra-ui/react';
import React from 'react';
import { BsFillStarFill } from "react-icons/bs"

function StarIcon( {color} ) {
    return (
        <>
            <Icon as={BsFillStarFill} color={color}/>
        </>
    );
}

export default StarIcon;
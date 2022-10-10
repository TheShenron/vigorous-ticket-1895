import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product_card from './Product_card';
import { useDispatch } from 'react-redux';
import { add } from '../../store/cartSlice';
import DonateBanner from './DonateBanner';
import { Box, Button, ButtonGroup, Divider, Flex, Input, Text, Select } from '@chakra-ui/react';
import Pagination from './Pagination';
import SelectCategory from './SelectCategory';
import Filter from './Filter';






function Category(props) {

    const dispatch = useDispatch()

    const [Resdata, setResData] = useState([])

    const [page, setPage] = useState(1)

    const HandlePage = (p) => {
        setPage(p)
    }

    useEffect(() => {
        setResData([])
        axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=15`)
            .then(d => {
                console.log(d)
                setResData(d)
            })
            .catch(err => console.log(err))
            .finally(() => console.log("ReqDone"))

    }, [page])



    return (
        <Box width="90%" m="auto">

            <DonateBanner />

            <SelectCategory/>


            <Flex>

                <Filter/>

                <Flex w="75%" flexWrap="wrap" gap={"15px"} mb={10}>
                    {Resdata.length === 0 ?
                        <h1>Loading</h1>
                        :
                        Resdata.data && Resdata.data.map((el, ind) => {
                            return <Product_card
                                key={ind + "!@#"}
                                image={el.images[0]}
                                title={el.title}
                                price={el.price} />
                        })
                    }
                </Flex>


            </Flex>


            <Pagination totalPage={6} currentPage={page} HandlePage={(p) => HandlePage(p)} />

        </Box>
    );

}

export default Category;

/*

category
: 
id
: 
1
image
: 
"https://api.lorem.space/image/fashion?w=640&h=480&r=3838"
name
: 
"Clothes"
[[Prototype]]
: 
Object
description
: 
"The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J"
id
: 
2
images
: 
Array(3)
0
: 
"https://api.lorem.space/image/fashion?w=640&h=480&r=6362"
1
: 
"https://api.lorem.space/image/fashion?w=640&h=480&r=8544"
2
: 
"https://api.lorem.space/image/fashion?w=640&h=480&r=6801"
length
: 
3
[[Prototype]]
: 
Array(0)
price
: 
828
title
: 
"Tasty Metal Ball"

*/
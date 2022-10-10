import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product_card from './Product_card';
import DonateBanner from './DonateBanner';
import { Box, Flex } from '@chakra-ui/react';
import Pagination from './Pagination';
import SelectCategory from './SelectCategory';
import Filter from './Filter';






function Category(props) {

    const [origin , setOrigin] = useState([])
    const [Resdata, setResData] = useState([])
    const [sortOrder, setsortOrder] = useState("def")

    const [page, setPage] = useState(1)

    const HandlePage = (p) => {
        setPage(p)
    }

    const sortLtH = (order) => {
        // Resdata.data.sort((a,b)=>a.price - b.price)
        // console.log(origin)
        if (order === "def") {
            // console.log("default")
            setResData([...origin])
            setsortOrder("deault wala value")

        } else if (order === "lth") {

            // console.log("low to heigh")
            setResData([...Resdata].sort((a, b) => a.price - b.price))
            setsortOrder("htl")

        } else if (order === "htl") {
            
            // console.log("heigh to low")
            setResData([...Resdata].sort((a, b) => b.price - a.price))
            setsortOrder("lth")

        } else {

            console.log("Something gets worng")

        }
    }


    const Searchitem = (val)=>{
        let Resdata =[...origin]
        let OutData = Resdata.filter((el)=>{
            return el.title.toLowerCase().includes(val.toLowerCase() )
        })
        setResData(OutData)
    }



    useEffect(() => {
        setResData([])
        axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=15`)
            .then(d => {
                setOrigin(d.data)
                setResData(d.data)
            })
            .catch(err => console.log(err))
            .finally(() => console.log("ReqDone"))

    }, [page])



    return (
        <Box width="90%" m="auto">

            <DonateBanner />

            <SelectCategory HandlePage={(x) => HandlePage(x)} Searchitem={(val)=>Searchitem(val)}/>


            <Flex>

                <Filter sortLtH={(order) => sortLtH(order)} />

                <Flex w="75%" flexWrap="wrap" gap={"15px"} mb={10}>
                    {Resdata.length === 0 ?
                        <h1>Loading</h1>
                        :
                        Resdata.map((el, ind) => {
                            return <Product_card
                                key={ind + "!@#"}
                                image={el.images[0]}
                                title={el.title}
                                price={el.price}
                                arr ={el}
                                />
                        })
                    }
                </Flex>


            </Flex>


            <Pagination totalPage={20} currentPage={page} HandlePage={(p) => HandlePage(p)} />

        </Box>
    );

}

export default Category;


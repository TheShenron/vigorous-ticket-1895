import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

const createPage = (totalPage , currentPage , HandlePage)=>{
  
    const Arr = new Array(totalPage).fill(0)

    return Arr.map((_,ind)=>{
        if(ind+1 === currentPage){
            return <Button disabled size="sm" borderRadius="0" >{ind+1}</Button>
        }else{
            return <Button size="sm" borderRadius="0" onClick={()=>HandlePage(ind+1)} >{ind+1}</Button>
        }
        
    })
}

function Pagination({totalPage , currentPage , HandlePage}) {


    return (
        <Flex gap="5px" justifyContent="center" my={5}>
            {createPage(totalPage , currentPage , HandlePage)}
        </Flex>
    );
}

export default Pagination;
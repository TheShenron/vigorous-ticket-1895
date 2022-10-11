import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

const createPage = (totalPage , currentPage , HandlePage)=>{
  
    const Arr = new Array(totalPage).fill(0)

    if(totalPage > 8){

        let arr = []
        for(let x = 1 ; x <= totalPage ; x++){
            if(x === 1){
                if(x === currentPage){
                    arr.push( <Button key={x+"BTN"} size="sm" disabled borderRadius="0" >{x}</Button> )
                }else{
                    arr.push( <Button key={x+"BTN"} size="sm" borderRadius="0" onClick={()=>HandlePage(x)} >{x}</Button> )
                }
            }else if(x === totalPage ){
                if(x === currentPage){
                    arr.push( <Button key={x+"BTN"} size="sm" disabled borderRadius="0" >{x}</Button> )
                }else{
                    arr.push( <Button key={x+"BTN"} size="sm" borderRadius="0" onClick={()=>HandlePage(x)} >{x}</Button> )
                }
            }else if(x - 1 === currentPage){
                arr.push( <Button key={x+"BTN"} size="sm" borderRadius="0" onClick={()=>HandlePage(x)} >{x}</Button> )
            }else if(x === currentPage){
                arr.push( <Button key={x+"BTN"} size="sm" disabled borderRadius="0" onClick={()=>HandlePage(x)} >{x}</Button> )
            }else if(x + 1 === currentPage ) {
                arr.push( <Button key={x+"BTN"} size="sm" borderRadius="0" onClick={()=>HandlePage(x)} >{x}</Button> )
            }else if(x > 1 && x <= currentPage - 2){
                x = currentPage-2
                arr.push( <Button key={x+"BTN"} size="sm" borderRadius="0" >...</Button> )
                
            }else if(x > currentPage + 2 && x < totalPage-1){
                x = totalPage - 2
                arr.push( <Button key={x+"BTN"} size="sm" borderRadius="0" >...</Button> )
               
            }

        }

        return arr
    }else{
        return Arr.map((_,ind)=>{
            if(ind+1 === currentPage){
                return <Button key={ind+"BTN"} disabled size="sm" borderRadius="0" >{ind+1}</Button>
            }else{
                return <Button key={ind+"BTN"} size="sm" borderRadius="0" onClick={()=>HandlePage(ind+1)} >{ind+1}</Button>
            }
            
        })
    }


    
}

function Pagination({totalPage , currentPage , HandlePage}) {


    return (
        <Flex gap="5px" justifyContent="center" my={5}>
            {createPage(totalPage , currentPage , HandlePage)}
        </Flex>
    );
}

export default Pagination;
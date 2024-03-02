import React from 'react'

const Docs = ({params}:any) => {
    console.log("params",params)
 if(params.slug?.length === 1){
    return <h1> docs for {params.slug[0]}</h1>
 }else if(params.slug?.length === 2){
    return <h1>docs for {params.slug[0]} for {params.slug[1]}</h1>
 }
    return <h1>You are viewing docs</h1>
 
}

export default Docs
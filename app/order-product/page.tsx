"use client"
import { useRouter } from 'next/navigation'
import React, { useReducer } from 'react'

const OrderProduct = () => {
    const router = useRouter()
    const handleClick=()=>{
        router.push("/")
    }
  return (
    <>
    <div>OrderProduct</div>
    <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default OrderProduct
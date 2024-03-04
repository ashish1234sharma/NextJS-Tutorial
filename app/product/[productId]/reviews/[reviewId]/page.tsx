import React from 'react'
import { notFound } from 'next/navigation'

const ReviewId = ({params}:any) => {
  let randomId =(count:any)=>{
    return Math.floor(Math.random())*count
  }
  const random=randomId(2)
    if(params.reviewId >100){
        notFound()
    }
    if(random === 1){
      throw new Error("Review is not loading")
    }
    console.log('random',random)
  return (
    <div>ReviewId {params.reviewId} for {params.productId}</div>
  )
}

export default ReviewId
import React from 'react'
import { notFound } from 'next/navigation'

const ReviewId = ({params}:any) => {
    if(params.reviewId >100){
        notFound()
    }
  return (
    <div>ReviewId {params.reviewId} for {params.productId}</div>
  )
}

export default ReviewId
import Link from 'next/link'
import React from 'react'

const Product = () => {
    let productId=100
  return (
    <>
    <Link href="/product/1">
    <div>Product 1</div>
    </Link>
    <Link href="/product/2">
    <div>Product 2</div>
    </Link>
    <Link href="/product/3" replace >
    <div>Product 3</div>
    </Link>
    <Link href={`/product/${productId}`}>
    <div>Product {productId}</div>
    </Link>
    </>
  )
}

export default Product
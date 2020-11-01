import React from 'react'
import { Link } from 'react-router-dom'
import { HouseProps } from '../../types'

export const House = ({id, address, images, price, saleStatus}: HouseProps) => {
  return (
    <>
      <h1>{address}</h1>
      <img src={images} alt={address}/>
      <p>{price}</p>
      <p>{saleStatus}</p>
      <Link to={`/houses/${id}`} >See More</Link>
    </>
  )
}

import React from 'react'
import { useHouseById } from '../../hooks'

export const DetailedHouse = ({ id }: { id: string }) => {
  const { house, loading, error } = useHouseById(id)
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed to fetch house...</h1>
  return (
    <div>
      <h1>{house.address}</h1>
      <img src={house.images} alt={house.address} />
      <p>Price: {house.price}</p>
      <p>Sale Statue: {house.saleStatus}</p>
      <p>SqFt: {house.houseSQFT}</p>
      <p>Lot SqFt: {house.lotSQFT}</p>
      <p>Last sold: {house.lastSold}</p>
    </div>
  )
}

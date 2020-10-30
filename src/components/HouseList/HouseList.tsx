import React from 'react'
import { useHouses } from '../../hooks'

export const HouseList = () => {
  const { houses, loading, error} = useHouses()

  const houseElements = houses.map(house => (
  <li key={house.id}>
    <h1>{house.address}</h1>
    <img src={house.images[0]} alt={house.address}/>
    <p>{house.price}</p>
    <p>{house.saleStatus}</p>
  </li>))

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>failed to get houses</h1>
  return (
    <div>
      {houseElements}
    </div>
  )
}

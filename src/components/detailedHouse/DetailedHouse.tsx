import React, { useState} from 'react'
import { useHouseById } from '../../hooks'
import { UpdateHouse } from '../updateHouse/UpdateHouse'

export const DetailedHouse = ({ id }: { id: number }) => {
  const { house, loading, error } = useHouseById(id)
  const [displayUpdateForm, setDisplay] = useState(false)

  const handleClick = () => {
    return setDisplay(true)
  }

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
      {displayUpdateForm ?
        <UpdateHouse id={id} /> 
        : 
        <button onClick={handleClick}>Update House</button>}
    </div>
  )
}

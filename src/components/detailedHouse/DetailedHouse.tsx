import React, { useState} from 'react'
import { useHouseById } from '../../hooks'
import { deleteHouse } from '../../services/house-api'
import { UpdateHouse } from '../updateHouse/UpdateHouse'

export const DetailedHouse = ({ id }: { id: number }) => {
  const { house, loading, error } = useHouseById(id)
  const [displayUpdateForm, setDisplay] = useState(false)

  const handleDisplay = () => {
    return setDisplay(true)
  }

  const handleDelete = () => {
    return deleteHouse(id)
  }

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed to fetch house...</h1>
  return (
    <div className="DetailedHouse">
      <h1>{house.address}</h1>
      <img src={house.images} alt={house.address} />
      <div id="stats">
        <p><b>Price</b>: {house.price}</p>
        <p><b>Sale Statue</b>: {house.saleStatus}</p>
        <p><b>SqFt</b>: {house.houseSQFT}</p>
        <p><b>Lot SqFt</b>: {house.lotSQFT}</p>
        <p><b>Last sold</b>: {house.lastSold}</p>
        {displayUpdateForm ?
          <UpdateHouse id={id} /> 
          : 
          <button onClick={handleDisplay}>Update House</button>}
        <button id="deleteButton" onClick={handleDelete}>Delete House</button>
      </div>
    </div>
  )
}

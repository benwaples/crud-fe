import React from 'react'
import { useHouses } from '../../hooks'
import { House } from './House'

export const HouseList = () => {
  const { houses, loading, error} = useHouses()
  
  const houseElements = houses.map(house => (
  <li key={house.id}>
    <House {...house}/>
  </li>))

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>failed to get houses</h1>
  return (
    <div>
      {houseElements}
    </div>
  )
}

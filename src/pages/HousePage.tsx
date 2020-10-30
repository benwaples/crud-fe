import React from 'react'
import { AddHouse } from '../components/AddHouse/AddHouse'
import { HouseList } from '../components/HouseList/HouseList'


export const HousePage = () => {
  return (
    <div>
      <AddHouse />
      <HouseList />
    </div>
  )
}

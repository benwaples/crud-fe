import React from 'react'
import { useHouseById } from '../../hooks'

export const DetailedHouse = ({ id }: { id: string }) => {
  const { house } = useHouseById(id)
  return (
    <div>
      <h1>{house.address}</h1>
    </div>
  )
}

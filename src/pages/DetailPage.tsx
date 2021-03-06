import React from 'react'
import { DetailedHouse } from '../components/detailedHouse/DetailedHouse'

type IdProps = {
  match: { params: { id: number }}
}

export const DetailPage = ({ match: { params: {id}}}: IdProps) => {
  return (
    <div id='DetailHouse'>
      <DetailedHouse id={id}/>
      
    </div>
  )
}

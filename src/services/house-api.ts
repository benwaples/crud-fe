import { House } from "../types"

const api = process.env.LOCALHOST


export const addHouse = (url: {url: string}) => {
  try{
  return fetch('https://glacial-garden-39406.herokuapp.com/api/v1/houses', {
    method: 'POST',
    body: JSON.stringify(url),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then(res => res.json())
} catch(err) {
  return new Error(err)
}
}

export const getHouses = (): Promise<House[]> => {
  
  return fetch('https://glacial-garden-39406.herokuapp.com/api/v1/houses')
    .then(res => res.json())     
}

export const getHouseById = (id: number): Promise<House> => {
  return fetch(`https://glacial-garden-39406.herokuapp.com/api/v1/houses/${id}`)
    .then(res => res.json())
}

export const updateHouse = (id: number, house: House): Promise<House> => {
  return fetch(`https://glacial-garden-39406.herokuapp.com/api/v1/houses/${id}`, 
    {
      method: 'PATCH',
      body: JSON.stringify(house),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  )
    .then(res => res.json())
}
import { House } from "../types"

const api = process.env.LOCALHOST


export const addHouse = (url: {url: string}) => {
  console.log(JSON.stringify(url))
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

export const getHouseById = (id: string): Promise<House> => {
  return fetch('https://glacial-garden-39406.herokuapp.com/api/v1/houses')
    .then(res => res.json())
}
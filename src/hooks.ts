import { useEffect, useState } from 'react'
import { addHouse, getHouses } from './services/house-api'
import { addUrl, House, useHousesType } from './types'

export const useUrl = (): addUrl => {
  const [url, setUrl] = useState('')

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(target.value)
  }

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const house = addHouse({ url })
    console.log(house)
    
    return house
  }

  return {
    url, 
    handleChange, 
    handleSubmit
  }
}

export const useHouses = (): useHousesType => {
  const [houses, setHouses] = useState<House[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getHouses()
      .then((houses: House[]) => setHouses(houses))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  },[])
  return {
    houses,
    loading, 
    error
  }
}
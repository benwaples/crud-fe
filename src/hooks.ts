import { useEffect, useState } from 'react'
import { addHouse, getHouses } from './services/house-api'
import { addUrl, House, useHousesType } from './types'

export const useUrl = (): addUrl => {
  const [url, setUrl] = useState('')
  const [houseAdded, setHouseAdded] = useState(false)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(target.value)
  }

  const useHandleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const house = addHouse({ url })
    console.log(house)
    setHouseAdded(true)
    return house
  }


  return {
    url,
    houseAdded, 
    handleChange, 
    useHandleSubmit
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
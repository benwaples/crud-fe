import { useEffect, useState } from 'react'
import { addHouse, getHouses, getHouseById } from './services/house-api'
import { 
  addUrl, 
  House, 
  useHousesType, 
  useHouseByIdType 
} from './types'

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
  const [houses, setHouses] = useState<House[]>([{
    id: 1,
    address: '', 
    images: '', 
    price: '',
    lotSQFT: '', 
    houseSQFT: '', 
    saleStatus: '', 
    lastSold: '',
  }])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getHouses()
      .then((houses) => setHouses(houses))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  },[])

  return {
    houses,
    loading, 
    error
  }
}

export const useHouseById = (id: string): useHouseByIdType => {
  const [house, setHouse] = useState({id: 1,
    address: '', 
    images: '', 
    price: '',
    lotSQFT: '', 
    houseSQFT: '', 
    saleStatus: '', 
    lastSold: '',})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getHouseById(id)
      .then((house: House) => setHouse(house))
      .catch((err) => setError(err))
      .finally(() => {setLoading(false)})
  }, [id])

  return {
    house,
    loading,
    error
  }
}
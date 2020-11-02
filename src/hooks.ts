import { useEffect, useState } from 'react'
import { addHouse, getHouses, getHouseById, updateHouse } from './services/house-api'
import { 
  addUrl, 
  House, 
  useHousesType, 
  useHouseByIdType, 
  UseUpdatedHouseType
} from './types'

export const useUrl = (): addUrl => {
  const [url, setUrl] = useState('')
  const [houseAdded, setHouseAdded] = useState(false)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(target.value)
  }

  const useHandleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const house = await addHouse({ url })
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

export const useHouseById = (id: number): useHouseByIdType => {
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

export const useUpdateHouse = (id: number): UseUpdatedHouseType => {
    const [address, setAddress] = useState('')
    const [images, setImages] = useState('')
    const [price, setPrice] = useState('')
    const [lotSQFT, setLotSQFT] = useState('')
    const [houseSQFT, setHouseSQFT] = useState('')
    const [saleStatus, setSaleStatus] = useState('')
    const [lastSold, setLastSold] = useState('')
    useEffect(() => {
      getHouseById(id)
        .then((house: House) => {
          setAddress(house.address)
          setImages(house.images)
          setPrice(house.price)
          setLotSQFT(house.lotSQFT)
          setHouseSQFT(house.houseSQFT)
          setSaleStatus(house.saleStatus)
          setLastSold(house.lastSold)
        })
    }, [id])

  const useHandleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    if(currentTarget.name === 'address') setAddress(currentTarget.value)
    if(currentTarget.name === 'images') setImages(currentTarget.value)
    if(currentTarget.name === 'price') setPrice(currentTarget.value)
    if(currentTarget.name === 'lotSQFT') setLotSQFT(currentTarget.value)
    if(currentTarget.name === 'houseSQFT') setHouseSQFT(currentTarget.value)
    if(currentTarget.name === 'saleStatus') setSaleStatus(currentTarget.value)
    if(currentTarget.name === 'lastSold') setLastSold(currentTarget.value)
  }  

  const useHandleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await updateHouse(id, { id, address, images, price, lotSQFT, houseSQFT, saleStatus, lastSold })
  }

  return {
    address, 
    images,
    price,
    lotSQFT,
    houseSQFT,
    saleStatus,
    lastSold,
    useHandleChange, 
    useHandleSubmit
  }
}
import { useState } from 'react'
import { addHouse } from './services/house-api'

type addUrl = {
  url: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

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

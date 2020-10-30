import React from 'react'
import { useUrl } from '../hooks'

export const AddHouse = () => {

  const { url, handleChange, handleSubmit } = useUrl()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">Listing URL</label>
      <input 
        id="url"
        type="text"
        name="url"
        value={url}
        onChange={handleChange}
      />
      <button>Add House</button>
    </form>
  )
}

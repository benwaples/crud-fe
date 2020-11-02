import React from 'react'
import { useUrl } from '../../hooks'

export const AddHouse = () => {

  const { url, handleChange, useHandleSubmit } = useUrl()

  return (
    <form onSubmit={useHandleSubmit}>
      <label htmlFor="url">Listing URL</label>
      <input 
        id="url"
        type="text"
        name="url"
        value={url}
        onChange={handleChange}
      />
    </form>
  )
}

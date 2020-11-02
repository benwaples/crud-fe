import React from 'react'
import { useUpdateHouse } from '../../hooks'

export const UpdateHouse = ({ id}: { id: number}) => {
  const {
    address,
    images,
    price, 
    lotSQFT,
    houseSQFT,
    saleStatus,
    lastSold,
    useHandleChange,
    useHandleSubmit
  } = useUpdateHouse(id)

  const handleClick = () => {
    return useHandleSubmit
  }
  return (
    <div id="formDiv">
      <form onSubmit={useHandleSubmit} id="update-form">
      <label htmlFor="address">Address</label>
      <input 
        id="address"
        type="text"
        name="address"
        value={address}
        onChange={useHandleChange}
      />
      <label htmlFor="images">Images</label>
      <input 
        id="images"
        type="text"
        name="images"
        value={images}
        onChange={useHandleChange}
      />
      <label htmlFor="price">Price</label>
      <input 
        id="price"
        type="text"
        name="price"
        value={price}
        onChange={useHandleChange}
      />
      <label htmlFor="lotSQFT">Lot SqFt</label>
      <input 
        id="lotSQFT"
        type="text"
        name="lotSQFT"
        value={lotSQFT}
        onChange={useHandleChange}
      />
      <label htmlFor="houseSQFT">House SqFt</label>
      <input 
        id="houseSQFT"
        type="text"
        name="houseSQFT"
        value={houseSQFT}
        onChange={useHandleChange}
      />
      <label htmlFor="saleStatus">Sale Status</label>
      <input 
        id="saleStatus"
        type="text"
        name="saleStatus"
        value={saleStatus}
        onChange={useHandleChange}
      />
      <label htmlFor="lastSold">Last Sold</label>
      <input 
        id="lastSold"
        type="text"
        name="lastSold"
        value={lastSold}
        onChange={useHandleChange}
      />
      <button onClick={handleClick}>Update House</button>
    </form>
    </div>
  )
}
 
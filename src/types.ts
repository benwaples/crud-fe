export type House ={
  id: number,
  address: string, 
  images: string, 
  price: string,
  lotSQFT: string, 
  houseSQFT: string, 
  saleStatus: string, 
  lastSold: string,
}

export type HouseProps ={
  id: number,
  address: string, 
  images: string, 
  price: string,
  saleStatus: string, 
}

export type addUrl = {
  url: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  useHandleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  houseAdded: boolean
}

export type useHousesType = {
  houses: House[];
  loading: boolean;
  error: string | null
}
export type useHouseByIdType = {
  house: House;
  loading: boolean;
  error: string | null
}

export type UseUpdatedHouseType = {
  address: string, 
    images: string,
    price: string,
    lotSQFT: string,
    houseSQFT: string,
    saleStatus: string,
    lastSold: string,
    useHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, 
    useHandleSubmit:(event: React.FormEvent<HTMLFormElement>) => void
}
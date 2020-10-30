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
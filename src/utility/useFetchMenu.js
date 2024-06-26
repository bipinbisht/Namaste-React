import { useEffect, useState } from 'react'

const useFetchMenu = (id) => {
  const [menu, setMenu] = useState(null)
  const URL = 'https://dummy.restapiexample.com/api/v1/employee/'
  //   'http://localhost:5000/about'

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(URL + id)
    console.log(data + ' ---------f')
    const json = await data.json()
    console.log(json)
    setMenu(json?.data)
  }
  console.log(menu + 'from custom')
  return menu
}
export default useFetchMenu

import { useEffect, useState } from 'react'

const useFetchMenu = (resId) => {
  const [menu, setMenu] = useState([])
  const URL =
    'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId='
  //   'http://localhost:5000/about'
  let arr
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(URL + resId)
    const json = await data.json()

    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log(json)
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }
  return menu
}
export default useFetchMenu

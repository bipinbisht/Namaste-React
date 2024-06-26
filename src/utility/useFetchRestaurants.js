import { useEffect, useState } from 'react'

const useFetchRestaurants = () => {
  const [restaurants, setRestaurant] = useState([])
  const RES_URL =
    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

  useEffect(() => {
    fetchResturants()
  }, [])

  const fetchResturants = async () => {
    const data = await fetch(RES_URL)
    const json = await data.json()

    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    setRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }
  return restaurants
}

export default useFetchRestaurants

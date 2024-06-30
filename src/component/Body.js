import useFetchRestaurants from '../utility/useFetchRestaurants'
import Card from './Card'
import useOnlineStatus from '../utility/useOnlineStatus'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import { useState, useEffect } from 'react'

const Body = () => {
  console.log('body renders')
  const restaurants = useFetchRestaurants()
  const [topRated, setTopRated] = useState(restaurants)
  const [searchText, setSearchText] = useState('')
  const onlineStatus = useOnlineStatus()
  useEffect(() => {
    if (restaurants) {
      setTopRated(restaurants)
    }
  }, [restaurants])

  if (!onlineStatus) {
    return <h1>You are currently offline, Please check your internet!!!</h1>
  }
  if (topRated.length === 0) {
    return <Shimmer />
  }
  return (
    <>
      <div className="flex mt-4 justify-center">
        <div className="flex">
          <input
            className="border-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          ></input>
          <button
            className="ml-4 bg-green-100 px-4"
            onClick={() => {
              console.log(searchText)
              const filteredRestaurant = restaurants.filter((rest) => {
                return (rest?.info?.name)
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              })
              setTopRated(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <div className="ml-4">
          <button
            className="px-4 py-2 bg-blue-100"
            onClick={() => {
              const top = restaurants.filter((rest) => {
                return rest?.info?.avgRating > 4.2
              })
              setTopRated(top)
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="p-2 flex flex-wrap rounded-lg m-auto w-8/12">
        {topRated.map((rest) => (
          <Link key={rest?.info?.id} to={'/restMenu/' + rest?.info?.id}>
            <Card item={rest} />
          </Link>
        ))}
      </div>
    </>
  )
}
export default Body

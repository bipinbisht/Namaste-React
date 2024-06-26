import useFetchRestaurants from '../utility/useFetchRestaurants'
import Card from './Card'
import useOnlineStatus from '../utility/useOnlineStatus'
const Body = () => {
  const restaurants = useFetchRestaurants()
  const onlineStatus = useOnlineStatus()
  if (!onlineStatus) {
    return <h1>You are currently offline, Please check your internet!!!</h1>
  }
  if (restaurants === null) return <h1>Loading...</h1>
  return (
    <div className="p-2 flex flex-wrap rounded-lg">
      {restaurants.map((rest) => (
        <Card key={rest?.info?.id} item={rest} />
      ))}
    </div>
  )
}

export default Body

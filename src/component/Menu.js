import { useParams } from 'react-router-dom'
import useFetchMenu from '../utility/useFetchMenu'
import { useState, useEffect } from 'react'
import RestaurantAccordion from './RestaurantAccordion'

const Menu = () => {
  const [localdata, setLocalData] = useState([])
  const [showIndex, setShowIndex] = useState(null)
  const { resId } = useParams()
  const MENU_IMG =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/'

  const menu = useFetchMenu(resId)

  useEffect(() => {
    if (menu) {
      console.log('inside setmenu')
      setLocalData(menu)
    }
  }, [menu])

  if (localdata === null) {
    return <div>Loading...</div>
  }
  // console.log(localdata)

  const category = localdata.filter((c) => {
    return (
      c?.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
    )
  })
  console.log(category)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">Rest Name</h1>
      <p className="font-bold text-lg">Cuisines</p>
      {category.map((obj, index) => (
        <RestaurantAccordion
          key={index}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          data={obj?.card?.card}
        />
      ))}
    </div>
  )
}
export default Menu

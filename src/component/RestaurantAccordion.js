import { useState } from 'react'
import ItemList from './ItemList'
const RestaurantAccordion = ({ data, showItems, setShowIndex }) => {
  //   const [toggle, setToggle] = useState(showItems)
  //   console.log(data)
  const handleClick = () => {
    setShowIndex()
  }
  return (
    <div>
      {/* Header */}
      <div className=" w-7/12 mx-auto my-4 bg-yellow-50 shadow-xl  p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title || 'Noname'} (
            {data?.categories[0]?.itemCards.length || 0})
          </span>
          <span> 🔽</span>
        </div>
        {showItems && <ItemList items={data?.categories[0]?.itemCards} />}
        {/* {showItems ? <ItemList items={data?.categories[0]?.itemCards} /> : null} */}
      </div>
      {/* Accordion body */}
    </div>
  )
}

export default RestaurantAccordion

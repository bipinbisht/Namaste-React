import { useDispatch } from 'react-redux'
import { addItem } from '../utility/cartSlice'

const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const addCartItems = (item) => {
    //dispatch action
    dispatch(addItem(item))
  }
  const URL =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
  console.log(items)
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item?.card?.info?.name} </span>
              <span>
                - ₹{' '}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">
              {item?.card?.info?.description ||
                `It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. The point of using Lorem Ipsum.`}
            </p>
          </div>
          <div className=" p-4 w-3/12 ">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white  shadow-lg"
                onClick={() => {
                  console.log(item)
                  return addCartItems(item)
                }}
              >
                Add +
              </button>
              {}
            </div>
            <img
              src={URL + item?.card?.info?.imageId}
              alt="Default"
              className="w-full rounded-lg h-24"
            ></img>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList

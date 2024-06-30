import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utility/cartSlice'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const URL =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

  console.log(cartItems + 'from Cart')
  if (cartItems.length === 0) {
    return <h1 className="text-center font-bold p-4">Cart is Empty</h1>
  }
  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold text-2xl"> Cart</h1>
      <button
        className="rounded-lg bg-black text-white  p-2 mt-3 shadow-sm"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-7/12 mx-auto my-4 bg-yellow-50 shadow-xl  p-4">
        {cartItems.map((item) => (
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
                <button className="p-2 mx-16 rounded-lg bg-black text-white  shadow-lg">
                  Add +
                </button>
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
    </div>
  )
}

export default Cart

import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import useOnlineStatus from '../utility/useOnlineStatus'
const Header = () => {
  const onlinStatus = useOnlineStatus()
  const LINK_IMG =
    'https://img.freepik.com/premium-vector/logo-restaurant-with-plate-food-fork_788759-2644.jpg?w=826'
  return (
    <div className="flex justify-between bg-yellow-50 shadow-xl">
      <div className="w-40">
        <img className="food-logo" src={LINK_IMG} alt="Food" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 ">Online Status: {onlinStatus ? '✅' : '🛑'}</li>
          <li className="px-4 hover:shadow-sm hover:bg-yellow-100">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:shadow-sm hover:bg-yellow-100">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 hover:shadow-sm hover:bg-yellow-100">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 hover:shadow-sm hover:bg-yellow-100">
            <Link>Cart</Link>
          </li>
          <li className="px-4 hover:shadow-sm hover:bg-yellow-100">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:shadow-sm hover:bg-yellow-100">
            <Button />
          </li>
        </ul>
      </div>
    </div>
  )
}

const Button = () => {
  const [value, setValue] = useState('Login')
  return (
    <button
      className="btn"
      onClick={() => {
        value === 'Login' ? setValue('Logout') : setValue('Login')
      }}
    >
      {value}
    </button>
  )
}

export default Header

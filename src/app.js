import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './component/Error'
import Menu from './component/Menu'
import React, { lazy, Suspense, useEffect, useState } from 'react'
//Redux
import { Provider } from 'react-redux'

//lazy loading
const Grocery = lazy(() => import('./component/Grocery'))
const About = lazy(() => import('./component/About'))
const Contact = lazy(() => import('./component/Contact'))
const Cart = lazy(() => import('./component/Cart'))
import Body from './component/Body'
import appStore from './utility/appStore'

const AppLayout = () => {
  const [userName, setUserName] = useState()
  //authentication
  useEffect(() => {
    //make an api call and send username and password
    const data = {
      name: 'Bipin',
    }
    setUserName(data.name)
  }, [])
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  )
}

const Button = () => {
  const [value, setValue] = useState('On')
  return (
    <button
      className="btn"
      onClick={() => {
        value === 'On' ? setValue('Off') : setValue('On')
      }}
    >
      {value}
    </button>
  )
}

const appRouting = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {' '}
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {' '}
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/restMenu/:resId',
        element: <Menu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouting} />)

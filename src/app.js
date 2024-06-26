import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './component/Error'
// import About from './component/About'
// import Contact from './component/Contact'
import Menu from './component/Menu'
import React, { lazy, Suspense } from 'react'
//lazy loading
const Grocery = lazy(() => import('./component/Grocery'))
const About = lazy(() => import('./component/About'))
const Contact = lazy(() => import('./component/Contact'))
import Body from './component/Body'
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
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
        path: '/dynamic/:id',
        element: <Menu />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {' '}
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouting} />)

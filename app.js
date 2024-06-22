import React from 'react'
import ReactDOM from 'react-dom/client'

const Heading = () => <h1 className="heading">Hi I m component 1</h1>

const Heading2 = () => {
  return (
    <div>
      <Heading />
      <h1>Hi I Am component 2</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading2 />)

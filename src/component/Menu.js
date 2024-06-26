import { useParams } from 'react-router-dom'
import useFetchMenu from '../utility/useFetchMenu'

const Menu = () => {
  const { id } = useParams()

  const menu = useFetchMenu(id)
  console.log(menu?.employee_name)

  if (menu === null) {
    return <div>Loading...</div>
  }
  const { employee_name, employee_age } = menu
  return (
    <div>
      <h1>Menu</h1>
      <h2>Employee Name {employee_name} </h2>
      <h2>Employee Age {employee_age} </h2>
    </div>
  )
}
export default Menu

import Header from './components/Header'
import Searchbar from './components/Searchbar'
import ItemTable from './components/ItemTable'
import ServiceTable from './components/ServiceTable'
import { useEffect, useState } from 'react'

const App = () => {
  const [ items, setItems ] = useState(null)
  const [serviceItems, setServiceItems] = useState([{_id: "", idlm: "", title: ""}])
  const search = "a"

  const getItems = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/items/${search}`)
      const json = await response.json()
      setItems(json)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => getItems,[])

  // console.log(items)

  return (
    <div className="App">
      {items?.map((item) => <ItemTable key={item._id} item={item} setServiceItems={setServiceItems}/>)}
      <Header/>
      <Searchbar/>
      {serviceItems?.map((serviceItems) => <ServiceTable key={serviceItems.id} serviceItems={serviceItems}/>)}
    </div>
  )
}

export default App

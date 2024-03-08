import ItemTable from './components/ItemTable'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <ItemTable/>
      <ServiceTable/>
    </div>
  )
}

export default App

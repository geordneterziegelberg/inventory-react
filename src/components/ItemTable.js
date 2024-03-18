import Button from 'react-bootstrap/Button';

const ItemTable = ({item, setServiceItems}) => {
  const addItem = (e) => {
    console.log(e.target)
    setServiceItems(serviceItem => [...serviceItem, item])
  }
  return (
    <div className="item-table">
      <div>
        { item.idlm }
        { item.title }
        <Button onClick={addItem} >add</Button>
      </div>
    </div>
  )
}
  
export default ItemTable
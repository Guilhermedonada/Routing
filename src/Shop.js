import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './App.css';



function Shop() {
  
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data_api = await fetch('https://fortnite-api.com/v1/playlists')
    
    const items = await data_api.json()
    console.log(items)
    setItems(items.data)

  }
  
  return (
    <div className="App">
      {items.map(item => (
        
        <h1 key={item.id}><Link to={`/shop/${item.id}`}>{item.name}</Link></h1>
      ))}
    </div>
  );
}

export default Shop;

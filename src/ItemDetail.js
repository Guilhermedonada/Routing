import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './App.css';



//o match faz com que eu pegue algumas coisas da pagina, como por exemplo a url que estou passando
function ItemDetail({ match }) {
  
  useEffect(() => {
    fetchItem()
    console.log(match)
  }, [])

  //colocar a imagem como default vazio pois tem arquivos na api que nao possuem imagens, dai nao estoura erro
  const [item, setItem] = useState({
    images: {}
  })

  //essa url que eu to usando deveria ser uma url para mostrar os detalhes do item clicado la no shop.
  // eu posso pegar o id atraves do match e passar ele na url
  //exemplo const fetchItem = await fetch('https://fortnite-api.com/v1/map${match.params.id}')

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.com/v1/playlists/${match.params.id}`)
    const item = await fetchItem.json()
    setItem(item.data)
  }

  const styleDetail = {
    background: 'black',
    color: 'white'
  }
 
  return (
    <div style={styleDetail}>      
      <h1>{item.name}</h1>
      <h1>{item.subName}</h1>
      <img src={item.images.missionIcon} />
    </div>
  );
}

export default ItemDetail;

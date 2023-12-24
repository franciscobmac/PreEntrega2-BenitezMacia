import ProductoCard from './componentes/ProductoCard/ProductoCard';
import React from 'react'
import './app.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/NavBar/NavBar';

const App = () => {

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenido a Mundo Caramelo"}/>
    </>
  )
}

export default App

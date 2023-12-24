import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
        <h1>Caramelos Dulces</h1>
        <nav>
            <ul>
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Contacto</li>
            <li>Tienda</li>
            <li>Carrito</li>
            </ul>
        </nav>
    <CartWidget/>
    </header>
  );
};

export default Navbar;
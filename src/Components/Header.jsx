import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMLContext } from '../Context'


const Header = () => {
    const navigate = useNavigate()

    const {total, cantidad} = useMLContext()
  return (
    <div className='header'>
      <h3 onClick={() => navigate(-1)}>⬅Back</h3>
      <img className='logo' src='/mercado-libre-logo.svg' style={{width: 100, height: 100}} alt="" />
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/shop'><h3>Shop</h3></Link>
      <Link to='/contact'><h3>Contacto</h3></Link>
      <p>Total a pagar: ${total} - Items: {cantidad}</p>
    </div>
  )
}

export default Header

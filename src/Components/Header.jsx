import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h3 onClick={() => navigate(-1)}>Back</h3>
      <img className='logo' src='https://seeklogo.com/images/M/mercado-libre-codo-a-codo-logo-30BB880A5C-seeklogo.com.png' style={{width: 100, height: 100}} alt="" />
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/shop'><h3>Shop</h3></Link>
      <Link to='/contact'><h3>Contacto</h3></Link>
    </div>
  )
}

export default Header

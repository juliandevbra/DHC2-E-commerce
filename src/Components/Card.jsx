import React from 'react'
import { Link } from 'react-router-dom'
import { useMLContext } from '../Context'

const Card = ({item}) => {

    const {setTotal, setCantidad} = useMLContext()

    const comprar = () => {
        setTotal(total => total + item.price)
        setCantidad(cantidad => cantidad + 1)
    }

  return (
    <div className='card'>
    <img src={item.thumbnail} alt="" />
    <h4>{item.title}</h4>
    <h5>${item.price}</h5>
    <button onClick={comprar}>Añadir al carrito</button>
    <Link to={'/shop/' + item.id}>
        <button>
            Ir al detalle
        </button>
    </Link>
  </div>
  )
}

export default Card
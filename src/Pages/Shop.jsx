import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = ({data}) => {

console.log(data)

  return (
    <div>
        <Outlet/>
        {data?.map(item => <Link to={'/shop/' + item.id}><li>{item.title}</li></Link>)}
        
    </div>
  )
}

export default Shop

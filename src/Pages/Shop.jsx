import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from '../Components/Card'

const Shop = ({data}) => {

console.log(data)

  return (
    <div>
        <Outlet/>
        <div className='grid'>
          {data?.map(item => (
              <Card item={item}/>
          ))}
        </div>
        
    </div>
  )
}

export default Shop

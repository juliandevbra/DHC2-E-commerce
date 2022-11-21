import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Home = (s) => {

  return (
    <div>
        <Header/>
        <h2>Bienvenidos al nuestro primer E-commerce</h2>
        <Outlet/>
        <Footer/>
       
    </div>
  )
}

export default Home

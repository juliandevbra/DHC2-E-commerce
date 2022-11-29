import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemDetail from './Components/ItemDetail'
import Auth from './Auth/Auth'
import LoginForm from './Pages/LoginForm'
function App() {

  const [data, setData] = useState()
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'

  useEffect(() => {
      axios(url)
      .then(res => setData(res.data.results))
  }, [])

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={Auth() ? <Home/> : <LoginForm/> }>
            <Route path='/shop' element={<Shop data={data}/>}>
              <Route path='/shop/:id' element={<ItemDetail data={data}/>}/>
            </Route>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App

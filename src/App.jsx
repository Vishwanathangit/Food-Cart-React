import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

export const cartContext = createContext()
function App() {
  const [cart, setcart] = useState([])

  return (
    <cartContext.Provider value={{cart, setcart}}>
        <BrowserRouter>
          <Header cart={cart} />
          <div className='containner'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Cart' element={<Cart />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App

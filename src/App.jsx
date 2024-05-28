import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './companent/login/Login'
import Cars from './companent/cars/Cars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Learn react-router-dom</h1>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="cars" element={<Cars/>}/>
      </Routes>
    </>
  )
}

export default App

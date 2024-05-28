import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './companent/login/Login'
import Cars from './companent/cars/Cars'
import SingleCar from './companent/single-car/Single-car'
import Aos from 'aos'

function App() {

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])
  
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>Learn react-router-dom</h1> */}
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="cars" element={<Cars/>}/>
        <Route path="single-car/:id" element={<SingleCar/>}/>
      </Routes>
    </>
  )
}

export default App

// import { useState } from 'react'
// import './App.css'
// import { Routes, Route, Link } from 'react-router-dom'
// import Login from './companent/login/Login'
// import Cars from './companent/cars/Cars'
// import SingleCar from './companent/single-car/Single-car'
// import Aos from 'aos'

import { Outlet } from "react-router-dom"


function App() {

  // useEffect(() => {
  //   Aos.init({duration: 1000})
  // },[])
  
  // const [count, setCount] = useState(0)

  return (


    <>

    <Outlet/>

      {/* <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="cars" element={<Cars/>}/>
        <Route path="single-car/:id" element={<SingleCar/>}/>
      </Routes> */}
    </>
  )
}

export default App

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App'
import Login from '../pages/login/Login'
import Cars from '../pages/cars/Cars'
import SingleCar from '../pages/single-car/Single-car'
import Main from '../pages/main/Main'
import Brend from '../pages/brend/Brend'
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}> 
                <Route index element={<Login/>}/>
                <Route path='main/' element={<Main/>}>
                <Route path='cars' element={<Cars/>}/>
                <Route path='brend' element={<Brend/>}/>
                </Route>
                {/* <Route path='cars' element={<Cars/>}/>
                <Route path='single-car/:id' element={<SingleCar/>}/> */}
            </Route>
        )
    )
  return  <RouterProvider router={router}/>
}

export default Index
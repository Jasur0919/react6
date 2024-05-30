import React,{uss} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../companent/ui/sidebar/Sidebar'
import Header from '../../companent/ui/header/Header'
import Cars from '../cars/Cars'
import './Main.css'

const Main = () => {

  return (
      <div className='main_layout' >
        <Sidebar/>
        <div className='main_left'>
          <Header/>
          <main>
            {/* <Cars/> */}


            <Outlet/>
          </main>
        </div>
      </div>
  )
}

export default Main
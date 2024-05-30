import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Brend.css'
import { IoCartOutline } from "react-icons/io5";
import { FaHeartBroken } from "react-icons/fa";

const API_URL = "https://dummyjson.com/products"

const Brend = () => {
    const [data,setData] =useState([])


    useEffect(() => {
        axios
            .get(API_URL)
            // .get("https://dummyjson.com/products")
            .then(res =>setData(res.data.products))
            .catch(err => console.log(err))
      })
      
    
      let cards  = data?.slice(0, 12)?.map((pro) => (
        <div key={pro.id} className="card_1"   data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
                <span className='span'><FaHeartBroken />  <IoCartOutline /></span>
                <img src={pro.images[0]} alt="" />
                <h5>{pro.description}</h5>
                <h3>{pro.price}$</h3>
                <h4>{pro.title}</h4>
                <button>Add mobile</button>
              </div>
      ))
    
  return (
    <div>
        <h1>Brend</h1>

        <div className="cards">
            {cards}
        </div>
    </div>
  )
}

export default Brend
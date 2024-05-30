import React, { useState } from 'react'
import UserModal from '../../companent/modal'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaEye } from "react-icons/fa";




const Cars = () => {
    
    const [cars, setCars] = useState([])
    const [search, setSearch] = useState("")
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
       i.target.reset()

    }

    const deleteUser = (i) => {
       let new_users = cars.filter((item, index) => index !== i)
       setCars([...new_users])
       
    }
    // console.log(search);
  return (
<>
    <UserModal open={modal} toggle={() => setModal(false)} cars={cars} setCars={setCars}/>
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-10 offste-1">
                <div className="row">
                    <div className="col-4">
                        <button className='btn btn-success' onClick={() => setModal(true)}>Open modal</button>
                    </div>
                    <div className="col-8">
                        <input type="text" placeholder='Search...' onChange={(e)=> setSearch(e.target.value)} className='form-control' />
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <table className='table table-bordered table-hover table-striped'>
                <thead>
                    <tr>
                        <td>T/R</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Year</td>
                        <td>Color</td>
                        <td>Brend</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars?.filter((item) => {
                            if(item?.name?.toLowerCase().includes(search.toLowerCase())){
                                return item
                            }
                        })
                        .map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.year}</td>
                                <td>{item.color}</td>
                                <td>{item.brend}</td>
                                <td>
                                    <div className="d-flex gap-2 align-items-center">
                                        <button className='btn btn-info mx-1'> <FaEdit /> </button>
                                        <button onClick={() => deleteUser(index)} className='btn btn-danger mx-3'> <FaTrashAlt /> </button>
                                        <NavLink to="/single-car/1" className="btn btn-primary">
                                            <span><FaEye /></span>
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
</>
  )
}

export default Cars
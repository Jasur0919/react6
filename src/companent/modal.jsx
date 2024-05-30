import { useState } from "react"
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"

const UserModal = (props) => {
    const [out, setOut] = useState(false)
    const handleOut = () => {
        out(true)
    }
    const [form, setForm] = useState({})
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
        const {cars, setCars} = props
        cars.push(form)
        setCars([...cars])
        toggle()
        e.target.reset("")
    }
  return (
    <>
        <Modal isOpen={props.open} toggle={props.toggle}>
            <ModalHeader>
                <h1 className="text-center">Add user</h1>
            </ModalHeader>
            <ModalBody>
                <form id="submit" onSubmit={handleSubmit}>
                    <input required type="text " onChange={handleChange} placeholder="Name" name="name" className="form-control my-2" />
                    <input required type="number" onChange={handleChange} placeholder="Price" name="price" className="form-control my-2" />
                    <input required type="date" onChange={handleChange} placeholder="Year" name="year" className="form-control my-2" />
                    <input required type="text " onChange={handleChange} placeholder="Color" name="color" className="form-control my-2" />
                    <input required type="text " onChange={handleChange} placeholder="Brend" name="brend" className="form-control my-2" />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={props.toggle}>cancel</button>
                <button className="btn btn-success" onClick={() => setOut(!handleOut)} type="submit" form="submit" >save</button>
            </ModalFooter>
        </Modal>
    </>
  )
}

export default UserModal
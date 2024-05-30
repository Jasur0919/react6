import { useParams } from "react-router-dom"

const SingleCar = () => {
    const  {id} = useParams()
    // console.log(params.id);
    
  return (
    <>
        <h1>Single-car id: {id}</h1>
    </>
  )
}

export default SingleCar
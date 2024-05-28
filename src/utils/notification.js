import {Bounce, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
    return toast( {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        // type: prop.type,
    })

}

export default Notification
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Router } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import Root from './router/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>,

  // <Router/>
  <Root/>
)

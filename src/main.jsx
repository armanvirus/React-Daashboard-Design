import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the CSS files conditionally based on the theme

import './index.css'
  
console.log(window.innerWidth)
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

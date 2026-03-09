import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>This is Inside the Main Jsx ,Blahhhhhhhhhhhhhhh</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  MyApp()
)

/* <StrictMode>
    <MyApp />
</StrictMode> */

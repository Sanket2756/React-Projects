import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

export default function Home() {

  const navigate = useNavigate();

  const MoveOtherPage = () => {
    navigate('/about');
  }

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={MoveOtherPage} className="btn">
        Move to About
        </button>
    </div>
  )
}

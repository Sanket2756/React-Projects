import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <div>DashBoard</div>
      <Outlet/>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'

export default function Param() {
    let {id} = useParams();
  return (
    <div>
      <div>
            Params : {id}
      </div>
    </div>
  )
}

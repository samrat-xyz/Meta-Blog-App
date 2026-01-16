import React from 'react'
import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className='h-screen flex items-center justify-center '>
      <PropagateLoader />
    </div>
  )
}

export default Loading

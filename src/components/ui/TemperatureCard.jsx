import { Language } from '@mui/icons-material'
import React from 'react'

const TemperatureCard = () => {
  return (
    <div className='text-white bg-gray-500 h-56 w-56'>
        <div><Language/> Dhaka, Bangladesh</div>
        <p>Change of : 32% to 37%</p>
        {/* <div className=''>
            <div className='bg-blue-700 rounded-l-full h-36 w-36 flex items-center'>
            <div className='bg-white rounded-full h-32 w-32 mx-auto my-auto'></div>
            </div>
        </div> */}
        <div>
        <div class="w-36 h-36 rounded-full border-8 border-transparent bg-conic-gradient">
        <div className='bg-white rounded-full h-36 w-36 mx-auto my-auto'></div>
        </div>
        </div>

    </div>
  )
}

export default TemperatureCard
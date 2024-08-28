import React from 'react'
import Sidebar from './Sidebar';
import '../App.css';
import Videobar from './Videobar';
export default function Home() {
  return (
    <div>
      <div>
        <div className='grid grid-cols-6 mt-2 text-base'>
          <div>
         <Sidebar/>
         </div>
        
        <div className='col-span-5 overflow-hidden'>
          <Videobar/>
        </div>
        </div>
      </div>
    </div>
  )
}

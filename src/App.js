import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <div style={{ backgroundColor: '#181818', color: '#fff' }} className='min-h-screen'>
      <Navbar></Navbar>
    <Home></Home>
    </div>
  )
}

export default App
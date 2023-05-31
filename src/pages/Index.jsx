import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'

const Index = () => {
  return (
    <div className='w-[95%] mx-auto'>
      <NavBar/>
      {/* Grid display section */}
       <div className='main-index-container-layout'>
         <Card />
       </div>
    </div>
  )
}

export default Index

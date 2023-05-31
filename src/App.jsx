import { useState } from 'react'
import NavBar from './components/NavBar'
import Index from './pages/Index'
import Modal from './components/Modal'
import Search from './pages/Search'
import Listing from './pages/Listing'
import { ModalContextProvider } from './context/data'


function App() {


  return (

    <ModalContextProvider>
    {/* <Modal/> */}
     <Index />
     {/* <Search /> */}
     {/* <Listing /> */}
    </ModalContextProvider>
  )
}

export default App

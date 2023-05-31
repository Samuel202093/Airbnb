import { createContext, useContext, useState } from "react"

export const modalContext = createContext()

export const ModalContextProvider = ({children})=>{
    const[modalShow, setModalShow] = useState(false)

    const handleShow = ()=>{
        setModalShow(!modalShow)
    }



    return(<modalContext.Provider value={{handleShow, setModalShow, modalShow}}>
        {children}
    </modalContext.Provider>)
}

export const useModalContext = ()=>{
    return useContext(modalContext)
}
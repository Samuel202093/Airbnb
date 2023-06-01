import { createContext, useContext, useState } from "react"

export const modalContext = createContext()

export const ModalContextProvider = ({children})=>{
    const[modalShow, setModalShow] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const handleShow = ()=>{
        setModalShow(!modalShow)
    }

    // const handleChange = (e)=>{
    //     setSearchValue(e.target.value)
    //     fetchData(value);
    // }



    return(<modalContext.Provider value={{handleShow, setModalShow, modalShow, searchValue, setSearchValue}}>
        {children}
    </modalContext.Provider>)
}

export const useModalContext = ()=>{
    return useContext(modalContext)
}
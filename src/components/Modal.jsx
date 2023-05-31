import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BsSearch } from "react-icons/bs";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useModalContext } from "../context/data";

const ModalDrop = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {handleShow, setModalShow, modalShow} = useModalContext()

  const handleScrollOutOfView = ()=>{
    if (window.scrollY > 100) {
        setModalShow(!modalShow)
    }
  }

  useEffect(()=>{
    document.addEventListener("scroll", handleScrollOutOfView)
    return ()=> document.removeEventListener("scroll", handleScrollOutOfView)
  },[])

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="h-[100vh] w-full fixed top-[0] z-50">

    
    <div className="h-[80vh] w-full absolute top-[12%] z-50">
      <div className="bg-white pb-5">
        <div className="flex justify-between lg:w-[60%] h-[12vh] bg-greyish mx-auto px-[1rem]y rounded-[100px]  border-greyish border-[1px]">
          <div className="flex-col hover:rounded-[100px] hover:bg-[#b2acab] px-5 py-2 cursor-pointer ease-in duration-100 border-r-[1px] border-greyish">
            <label htmlFor="" className="text-[0.9rem]">
              Where
            </label>
            <input
              type="search"
              placeholder="search destination"
              className="w-full h-[6vh] rounded-[100px] pl-[0.2rem] focus:outline-none text-[0.9rem] bg-inherit cursor-pointer"
            />
          </div>
          <div className="py-[0rem] md:px-[0.5rem] border-r-[1px] border-greyish cursor-pointer">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="check date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className="date-picker"
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="flex justify-between hover:rounded-[100px] hover:bg-[#b2acab] md:px-5 py-2 ease-in duration-100 cursor-pointer">
            <div className="flex-col lg:px-3">
              <label className="text-[0.9rem]">Who</label>
              <input
                type="number"
                placeholder="Add guest"
                className="rounded-[100px] w-full h-[6vh] pl-[0.2rem] focus:outline-none text-[0.9rem] bg-inherit cursor-pointer"
              />
            </div>
            <div className="relative">
              <button className="flex bg-[#db0c63] text-white text-[1rem] h-[5vh]y md:px-[1.7rem] py-[0.9rem] rounded-full mt-[0.5rem]">
                <BsSearch className="hidden text-white text-xl lg:block translate-x-[-8px] translate-y-[4px]" />
                search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* transparent background */}
      <div className="h-[80vh] bg-[rgba(0,0,0,0.8)] w-full mt-5y" onClick={handleShow}></div>
      {/* <h2>Modal</h2> */}
    </div>
    </div>
  );
};

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalDrop />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;

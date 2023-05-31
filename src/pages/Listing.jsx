import React,{useEffect, useState} from 'react'
import { BsFillStarFill, BsUpload, BsDoorOpen, BsChevronDown, BsClock } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineApartment,AiFillFlag } from "react-icons/ai"
import { GrLocation} from "react-icons/gr"
import { HiChevronRight } from "react-icons/hi"
import { TbBrandSupernova } from "react-icons/tb"
import { useLocation } from 'react-router-dom';



const Listing = () => {
const [singleData, setSingleData] = useState([])
const location = useLocation()
useEffect(()=>{
    setSingleData(location.state)
},[])
console.log(singleData);
  return (
    <div className='flex-col space-y-8 w-[95%] mx-auto'>
        {/* heading container */}
      <div className='w-full'>
        <h1 className='text-[1.5rem] font-bold'>Mountain Retreat w/Views of Lake pend Oreille</h1>
      </div>
      {/* review container */}
      <div className='flex justify-between'>
        <div className='lg:flex justify-between lg:w-[30%] sm:w-[100%] h-[5vh]'>
            <div className='flex justify-between'>
            <span className='flex'>
                <BsFillStarFill className='text-[1rem]'/>
                <small className='px-2'> 4.92</small>
                
            </span>
            <span className='text-[0.9rem] underline cursor-pointer'>65 reviews</span>
            </div>
            <span className='text-[0.9rem] underline cursor-pointer'>Saglo, Idaho United States</span>
        </div>
        <div className='lg:w-[60%] h-[5vh]'>
            <div className='hidden lg:flex space-x-7 justify-end'>
                <div className='flex space-x-2 cursor-pointer'>
                    <BsUpload className='text-[1.2rem] my-[0.2rem]'/>
                    <span className='text-[1rem] underline'>share</span>
                </div>
                <div className='flex space-x-2 cursor-pointer'>
                    <AiOutlineHeart className='text-[1.2rem] my-[0.2rem]'/>
                    <span className='text-[1rem] underline'>save</span>
                </div>

            </div>
        </div>
      </div>
        {/* listing images */}
      <div className='list-container-layout'>
            <div className='main'>
                {/* <img src={singleData[0]?.info.images.data[0].url} className='w-inherit h-fit object-cover'/> */}
            </div>
            <div className='second'>
            {/* <img src={singleData[0]?.info.images.data[1].url} className='w-full h-fit  object-cover'/> */}
            </div>
            <div className='third'>
            {/* <img src={singleData[0]?.info.images.data[2].url} className='w-full h-fit object-cover'/> */}
            </div>
            <div className='fourth'>
            {/* <img src={singleData[0]?.info.images.data[3].url} className='w-full h-fit object-cover'/> */}
            </div>
            <div className='fifth'>
            {/* <img src={singleData[0]?.info.images.data[4].url} className='w-full h-fit object-cover'/> */}
            </div>

      </div>

      {/* rental unit details */}
      <div className='flex justify-between'>
        {/* left rental container */}
        <div className='lg:w-[65%] min-h-[30vh] flex-col space-y-4'>
            <div className='flex justify-between border-b-[1px] border-b-greyish py-3'>
                <div>
                <h2 className='text-[1.5rem] font-bold'>Entire rental unit hosted by Nino</h2>
                <span className='text-xx'>6 guest. 2 bedrooms. 6 beds. 2.5 baths</span>
                </div>
                <div className='hidden lg:w-[70px] h-[70px] rounded-full bg-red-600'>
                </div>
            </div>

            {/* self-nino-location wrapper */}
            <div className='flex-col space-y-5 border-b-[1px] border-b-greyish py-3'>
                <div className='flex justify-between'>
                    <BsDoorOpen className='text-[2rem]'/>
                    <div className='w-[94%] flex-col'>
                        <h2 className='text-[1.1rem] font-semibold'>Self check-in</h2>
                        <span className='text-xx'>You can check in with the doorman.</span>
                    </div>

                </div>

                <div className='flex justify-between'>
                    <TbBrandSupernova className='text-[2rem]'/>
                    <div className='w-[94%] flex-col sm:ml-3'>
                        <h2 className='text-[1.1rem] font-semibold'>Nino is a Superhost</h2>
                        <span className='text-xx'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>
                    </div>
                </div>
                
                <div className='flex justify-between'>
               
                    <GrLocation className='text-[2rem]'/>
                    <div className='w-[94%] flex-col'>
                        <h2 className='text-[1.1rem] font-semibold'>Great location</h2>
                        <span className='text-xx'>100% of recent guests gave the location a 5-star rating.</span>
                    </div>
                </div>

            </div>

            {/* the space wrapper */}
            <div className='flex-col space-y-5'>
                <div className='flex'>
                    <AiOutlineApartment className='text-[1.65rem]'/>
                    <p className='px-3 py-1 text-[1rem]'>Some info has been automatically translated. <small className='text-[1rem] underline cursor-pointer'>Show original language</small></p>
                </div>
                <div>
                    <p className='text-[1.05rem]'>Beautiful apartment a stone's throw from the sea  and from Avenida de Playa, the main street that represents the best of Puerto del Carmen, shops of all kinds and attractive restaurants, very nice is the walk along the" Avenida de Playa".</p>
                </div>
                <div>
                    <h3 className='text-[1.1rem] font-bold'>The space</h3>
                    <p className='text-[1rem]'>The apartment enjoys an enviable location and has a 180-degree sea view....</p>
                </div>
                <div className='flex'>
                    <span className='text-[1.15rem] underline cursor-pointer'>show more</span> 
                    <HiChevronRight className='text-[1.65rem] mx-2 my-1'/>
                </div>

            </div>

        </div>

        {/* right rental container */}
        <div className='hidden lg:w-[30%] min-h-[30vh] lg:flex-col space-y-7'>

            {/* reserve container */}

            <div className='w-full min-h-[40vh]  border-[1px] border-greyish shadow-lg rounded-lg  p-4 flex-col space-y-6'>

                {/* total taxes */}
                <div className='flex justify-between'>
                    <div className='flex-col space-y-2'>
                        <h2 className='text-[1.5rem] font-bold'>$954</h2> 
                        <span className='text-xx'>Total before taxes</span>
                    </div>
                    <div className='flex'>
                        <span className='text-xx flex py-2'><BsFillStarFill className='flex mx-2 my-1'/> 4.83. <small className='text-[0.9rem] underline px-2'>81 reviews</small></span>
                    </div>
                </div>

                {/* check-in container */}
                <div className='w-full h-[20vh] border-[1px] border-greyish rounded-md grid grid-rows-2'>
                    <div className='grid grid-cols-2 border-b-[1px] border-greyish'>
                        <div className='flex-col px-3 border-r-greyish border-r-[1px]'>
                            <p className='text-[0.85rem] pt-1'>CHECK-IN</p>
                            <span className='text-[0.85rem] pt-1'>6/1/2023</span>
                        </div>
                        <div className='flex-col px-3 '>
                            <p className='text-[0.85rem] pt-1'>CHECKOUT</p>
                            <span className='text-[0.85rem] pt-1'>6/8/2023</span>
                        </div>

                    </div>
                    <div className=' flex justify-between'>
                        <div className='flex-col px-3 py-2'>
                            <p className='text-[0.85rem]'>GUESTS</p>
                            <span>1 guest</span>
                        </div>
                        <BsChevronDown className='text-[1.3rem] m-4 font-bold'/>

                    </div>
                </div>

                <div className='flex-col space-y-3'>
                    <button className='py-3 rounded-md bg-[#dd1063] text-[#fff] w-full font-semibold'>Reserve</button>
                    <p className='text-center'>You won't be charged yet</p>
                </div>

            </div>

            {/* hours left book */}
            <div className='h-[19vh] w-full border-[1px] border-greyish rounded-lg px-4 py-6 flex justify-between'>
                <p><small className='text-[1.15rem] font-bold'>Only 14 hours left to book.</small> The host will stop accepting bookings for your dates soon.</p>
                <BsClock className='text-[5rem] text-[#dd1063]'/>
            </div>

                {/* report listing */}
            <div className='flex justify-center items-center opacity-[0.5]'>
              <AiFillFlag className='text-[1.2rem] my-1'/>  <span className='underline text-xx pl-4'>Report listing</span>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Listing

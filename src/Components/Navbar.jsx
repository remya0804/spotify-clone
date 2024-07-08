import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  return (
    
    <>
        {/* navbar container */}
        <div className='w-full font-semibold flex items-center justify-between'>

          {/* left right */}
          <div className='flex items-center gap-2'>

            <FaAngleLeft onClick={() => navigate(-1)} className='text-2xl cursor-pointer' />
            <FaAngleRight onClick={() => navigate(1)} className='text-2xl cursor-pointer'/>

          </div>

          <div className='flex items-center gap-4'>

            <p className='hidden px-4 py-1 bg-white text-black text-[15px] rounded-2xl cursor-pointer md:block '> Explore Premium</p>

            <p className= 'px-3 py-1 bg-black text-[15px] rounded-2xl cursor-pointer  '>Install App</p>

            <p className='w-7 h-7 bg-purple-500 text-black rounded-full flex items-center justify-center'>RS</p>


          </div>
            
        </div>

        <div className='mt-4 flex items-center gap-2'>

            <p className='px-4 py-1 bg-white text-black rounded-2xl cursor-pointer'> All </p>
            <p className='px-4 py-1 bg-black text-white  rounded-2xl cursor-pointer'> Music </p>
            <p className='px-4 py-1 bg-black text-white rounded-2xl cursor-pointer'> Podcasts </p>

           
        </div>
    
    </>
  )
}

export default Navbar
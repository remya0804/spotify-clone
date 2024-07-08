import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";  
import { useNavigate } from 'react-router-dom';

// import s1 from '../assets/s1.jpeg'


const Sidebar = () => {

    const navigate = useNavigate();
  return (

    // sidebar-container
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        
        {/* sidebar-container-section1*/}
        <div  className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>

            {/* sidebar-container-section-items*/}

            <div onClick={() => navigate('/')} className='pl-8 flex items-center gap-3 cursor-pointer'>

                <IoMdHome className='text-xl'/>

                <p className='font-bold'> Home </p>

            </div>
            {/* sidebar-container-section-items*/}
            <div className='pl-8 flex items-center gap-3 cursor-pointer'>

                <IoMdSearch className='text-xl'/>

                <p className='font-bold'> Search </p>

            </div>

        </div>

        {/* sidebar-container-section2*/}

        <div className='h-[85%] bg-[#121212] rounded '>

            {/* sidebar-container-section2-library*/}

            <div className='p-4 flex items-center justify-between'>


                {/* sidebar-container-section2-library-item1*/}

                <div className='flex items-center gap-3'>

                    <BsStack className='text-xl'/>

                    <p className='font-semibold'>Your Library</p>

                </div>

                <div className='flex items-center gap-3'>

                    <HiOutlineArrowRight className='text-xl'/>
                    <IoIosAdd className='text-2xl'/>

                </div>

            </div>

        

            {/* sidebar-container-section2-playlist*/}

            <div className='p-4 pl-4 m-2 font-semibold bg-[#242424] flex flex-col items-start justify-start gap-1'>

                <h1>Create your first playlist</h1>
                <p className='font-light'>Its easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4'> Create Playlist</button>

            </div>
            {/* sidebar-container-section2-playlist*/}
            <div className='p-4 pl-4 m-2 font-semibold bg-[#242424] flex flex-col items-start justify-start gap-1 mt-4'>

                <h1>Let's find some podcasts to follow</h1>
                <p className='font-light'>We will keep you updated on new posts</p>
                <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4'> Browse Podcasts</button>

            </div>

        </div>

    </div>
  )
}

export default Sidebar
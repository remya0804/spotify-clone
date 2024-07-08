import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Albumpage from './Albumpage'
import { albumData } from '../assets/data'

const Frontpage = () => {

  const frontpageRef = useRef();

  const location = useLocation();

  const isAlbum = location.pathname.includes("album");

  const albumId = isAlbum ? location.pathname.slice(-1) : '';

  const bgColor = albumData[Number(albumId)].bgColor;

  useEffect(() => {

    if(isAlbum){

      frontpageRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {

      frontpageRef.current.style.background = `#121212`;;



    }
  })

  return (

    <div ref={frontpageRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white lg:w-[75%] lg:ml-0'>

        <Routes>

            <Route path='/' element={<Home />}> </Route>
            <Route path='/album/:id' element={<Albumpage /> }>  </Route>
        </Routes>
        

    </div>
  )
}

export default Frontpage
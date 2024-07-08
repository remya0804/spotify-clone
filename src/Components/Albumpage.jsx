import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumData, songsData } from '../assets/data';
import { BsSpotify } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { pContext } from '../Context/PlayerContext';

const Albumpage = () => {

    const {id} = useParams();

    const album = albumData[id];

    const {playWithId} = useContext(pContext);
 
    return (

      <>

      <Navbar />

      <div className='mt-10 flex flex-col gap-8 md:flex-row md:items-end'>

        <img  className='w-48 rounded' src={album.image} alt="" />

        <div className='flex flex-col'>

            <p>Playlist</p>

            <h2 className='mb-4 text-5xl font-bold md:text-7xl'> {album.name}</h2>

            <h4>{album.caption}</h4>

            <p className='mt-1'>

                <BsSpotify className='inline-block text-xl text-green-500' />
                <b> Spotify </b>
                • 1,654,566 likes
                • <b>50 songs, </b>
                about 2 hr 30 minutes

            </p>
          
        </div>

      </div>

      <div className='mt-10 mb-4 pl-2 text-[#a7a7a7] grid grid-cols-3 sm:grid-cols-4'>

        <p> <b className='mr-4'> #</b> Title</p>

        <p>Album</p>

        <p className='hidden sm:block'>Date Added</p>


        <FaRegClock />

      </div>

      {
        songsData.map((item,idx) => {

          return <div onClick={() => playWithId(item.id)} key={idx} className='p-2 text-[#a7a7a7] grid grid-cols-3 items-center hover:text-[#ffffff2b] cursor-pointer sm:grid-cols-4'>

            <p className='text-white'>

              <b className='mr-4 text-[#a7a7a7]'>{idx+1}</b>

              <img src={item.image} className='w-10 mr-4 inline max-[600px]:hidden' alt="" />

              {item.name}


            </p>

            <p className='text-[15px]'> {album.name}</p>

            <p className='hidden text-[15px] sm:block'>5 days ago</p>

            <p>{item.duration}</p>




                </div>
        })
      }
      
      </>
    )
}

export default Albumpage
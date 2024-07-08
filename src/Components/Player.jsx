import React, { useContext } from 'react'
import { songsData } from '../assets/data'
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { ImLoop } from "react-icons/im";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { HiMiniQueueList } from "react-icons/hi2";
import { RiSpeaker3Fill } from "react-icons/ri";
import { FaVolumeDown } from "react-icons/fa";
import { CgMiniPlayer } from "react-icons/cg";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { pContext } from '../Context/PlayerContext';
import { FaPause } from "react-icons/fa6";


const Player = () => {

    const{track,seekBar,seekBg,status,songPlay,songPause,time,playNext,playPrevious,seekSong} = useContext(pContext);
  return (

    // player-container
    
    <div className='h-[10%]  w-[100%] px-4 py-0 bg-black text-white flex items-center justify-between fixed'>

        {/* songs data */}

        <div className='hidden lg:flex items-center gap-4'>

            <img className='w-12' src={track.image} alt="" />
            <div>

                <p>{track.name}</p>
                <p>{track.caption.slice(0,12)}</p>

            </div>

        </div>

        {/* player container */}

        <div className='m-auto flex flex-col items-center gap-1'>

            {/* player controls*/}

            <div className='flex items-center gap-4'>

                <FaShuffle  className='text-xl'/>
                <MdSkipPrevious onClick={() => playPrevious()} className='text-2xl'/>

                {

                    status ? <FaPause  onClick={() => songPause()} className='text-sm'/>

                    : <FaPlay onClick={() => songPlay()} className='text-sm'/>
                }
                
                
                <MdSkipNext  onClick={() => playNext()} className='text-2xl'/>
                <ImLoop  className='text-xl'/>

            </div>

            {/* player track */}

            <div className='flex items-center gap-5'>

                <p>{time.currentTime.minute} : {time.currentTime.second}</p>

                <div  ref={seekBg} onClick={(e) => seekSong(e)} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>

                    <hr ref={seekBar} className='h-1 w-0 border-none bg-green-800 rounded-full'/>


                </div>

                <p>{time.totalTime.minute} : {time.totalTime.second}</p>

            </div>


        </div>

        {/* player lrgescreen controls */}

        <div className='hidden lg:flex items-center gap-2 opacity-75'>

             <MdOutlineSmartDisplay  className='text-xl'/>
            <GiMicrophone  className='text-xl'/>
            <HiMiniQueueList  className='text-xl'/>
            <RiSpeaker3Fill  className='text-xl'/>
            <FaVolumeDown  className='text-xl'/>

            <div className='w-20 h-1 bg-slate-50 rounded'>

            </div>
            <CgMiniPlayer  className='text-xl'/>
            <MdOutlineZoomOutMap  className='text-xl'/>

        </div>

    </div>
  )
}

export default Player
import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/data';

export const pContext = createContext();

const PlayerContext = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[0]);
    const [status,setStatus] = useState(false);
    const[time,setTime] = useState({

        currentTime: {second: 0, minute: 0},
        totalTime : {second: 0, minute: 0}
})

const songPlay = () => {

    audioRef.current.play();
    setStatus(true)
}
const songPause = () => {

    audioRef.current.pause();
    setStatus(false)
}

useEffect(() => {

    setTimeout(() => {

        audioRef.current.ontimeupdate = () => {

            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + '%';

            setTime({

                currentTime: {
                    second: Math.floor(audioRef.current.currentTime % 60),
                    minute: Math.floor(audioRef.current.currentTime / 60) 
                },
                totalTime: {
                    second: Math.floor(audioRef.current.duration % 60),
                    minute: Math.floor(audioRef.current.duration / 60),
                },

            })
        }
    },1000)
})

const playWithId = async (id) => {

    await setTrack(songsData[id]);
    await audioRef.current.play();
    setStatus(true);
}

const playPrevious = async () => {

    if(track.id > 0){

        await setTrack(songsData[track.id - 1]);
        await audioRef.current.play();
        setStatus(true);
    } else
    {

        await setTrack(songsData[songsData.length - 1]);
        await audioRef.current.play();
        setStatus(true);

    }
}
const playNext = async () => {

    if(track.id < songsData.length-1){

        await setTrack(songsData[track.id + 1]);
        await audioRef.current.play();
        setStatus(true);
    } else

    {

        await setTrack(songsData[0]);
        await audioRef.current.play();
        setStatus(true);

    }
}

const seekSong = async (e) => {

    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
}

    const contextValue = {
        audioRef,
        seekBg,seekBar,
        track,setTrack,time,setTime,status,setStatus,
        songPlay,songPause,
        playWithId,
        playNext,playPrevious,
        seekSong
    }

  return (

    <pContext.Provider value={contextValue}>

        {props.children}


    </pContext.Provider>
  )
}

export default PlayerContext
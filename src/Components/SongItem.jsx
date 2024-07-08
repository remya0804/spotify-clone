import React, { useContext } from 'react'
import PlayerContext, { pContext } from '../Context/PlayerContext'

const SongItem = ({image,name,caption,id}) => {

  const {playWithId} = useContext(pContext);

  return (
    
    <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

        <img src={image}  className='rounded  h-[120px]'  alt="" />

        <p className='mt-2 mb-1 font-bold'>{name}</p>

        <p className='text-sm  text-slate-500'>{caption}</p>
        

    </div>
  )
}

export default SongItem
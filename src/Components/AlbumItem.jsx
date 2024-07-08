import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,caption,id}) => {

  const navigate = useNavigate();

  return (

    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

        <img src={image}  className='rounded h-[120px] w-[100%]'  alt="" />

        <p className='mt-2 mb-1 font-bold'>{name}</p>

        <p className='text-sm text-slate-500'>{caption}</p>
        

    </div>

  )
}

export default AlbumItem
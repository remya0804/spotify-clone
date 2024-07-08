import React from 'react'
import Navbar from './Navbar'
import { albumData, songsData } from '../assets/data'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const Home = () => {
  return (
    
    <>

      <Navbar />

      {/* albums */}

      <div className='mb-4'>

        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>

        <div className='flex overflow-auto'>

                {

                    albumData.map((item,idx) => {

                      return <AlbumItem key={idx} name={item.name}  image={item.image} id={item.id} caption={item.caption}/>

                    })
                }


        </div>

      </div>

        {/* songs  */}

      <div className='mb-4'>

        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>

        <div className='flex overflow-auto'>

                {

                    songsData.map((item,idx) => {

                      return <SongItem key={idx} name={item.name}  image={item.image} id={item.id} caption={item.caption}/>

                    })
                }


        </div>

      </div>

        


      
    
    </>
  )
}

export default Home
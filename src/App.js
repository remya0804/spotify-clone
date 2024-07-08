import { useContext } from 'react';
import './App.css';
import Frontpage from './Components/Frontpage';
import Player from './Components/Player';
import Sidebar from './Components/Sidebar';
import { pContext } from './Context/PlayerContext';

function App() {

  const {audioRef} = useContext(pContext);
  const {track} = useContext(pContext);

  

  return (
    <div className="h-screen bg-black">
      <div className='h-[90%] flex'>

        <Sidebar />

        <Frontpage />


      </div>

      {/* <Frontpage /> */}

      <Player />

      <audio ref={audioRef} src={track.file} preload='auto'></audio>
   
    </div>
  );
}

export default App;

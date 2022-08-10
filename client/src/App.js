
import HorseCard from './components/HorseCard';
import {useState, useEffect} from 'react'
import socketIOClient from 'socket.io-client'

const ENDPOINT = "http://localhost:3002"


const App = () => {

  const [horses, setHorses] = useState([])
  

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.emit("start")
    socket.on("ticker", data => {
      setHorses(data)
    console.log(data);

    })
    return () => socket.disconnect();

  }, [horses.distance])

  return (
    <>
    <section id='section-results'>
      <div className="container container-results">
      
        <div className='row results-row'>
        
        <div className='col-12 d-flex align-items-stretch race-card-wrapper'>
          
          <div className="container">
            {horses.map(horse => 
              <HorseCard key={horse.name} name={horse.name} distance={horse.distance} />
            )}
    </div>
      </div>
    </div>
    
   </div>
   </section>
   </>

  );
}

export default App;

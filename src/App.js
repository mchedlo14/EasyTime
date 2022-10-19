import React, { useRef, useState } from 'react'
import Stopwatch from './components/Stopwatch'
import './app.css'

const App = () => {
  const [choose,setChoose] = useState(0)
  const stopWatchRef = useRef(null);



  return (
    <div className='app'>
      <div className='main-concept'>
        <div className='menu-box'>
          <div className='menu-item'>
            <p className={choose === 0 ? 'choosed':'notchoose'} onClick={() => setChoose(0)}>Stopwatch</p>
          </div>

          <div className='menu-item'>
            <p className={choose === 1 ? 'choosed':'notchoose'} onClick={() => setChoose(1)}>Countdown</p>
          </div>

          <div className='menu-item'>
            <p className={choose === 2 ? 'choosed':'notchoose'} onClick={() => setChoose(2)}>Alarm</p>
          </div>

        </div>

        <Stopwatch />
      </div>
    </div>
  )
}

export default App
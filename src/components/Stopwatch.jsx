import React, { useEffect, useState } from 'react'
import '../assets/Stopwatch.css'

const Stopwatch = () => {
    const [time,setTime] = useState(0)
    const [start,setStart] = useState(false)


    useEffect(() => {
        let interval = null;

        if(start){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            },10)
        }else{
            clearInterval(interval)
        }

        return () => clearInterval(interval)


    },[start])

  return (
    <div className='stopwatch-wrapper'>
        <div className='time-wrapper'>
            <p className='time'>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</p>
            <p className='time'>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</p>
            <p className='miliseconds'>{('0' + (time / 10) % 100).slice(-2)}</p>
        </div>
        <div className='stopwatch-buttons'>
            <button className='start-btn' onClick={() => setStart(true)}><img src='/images/stopwatch.svg'/>Start</button>
            <button className='start-btn' onClick={() => setStart(false)}>Stop</button>
            <button className='start-btn' onClick={() => setTime(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch
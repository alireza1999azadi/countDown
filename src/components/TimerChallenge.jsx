import React, { useRef } from 'react'
import { useState } from 'react'
import ResultModal from './ResultModal'



export default function TimerChallenge({ title, targetTime }) {
  
  // const [timerExpired, setTimerExpired] = useState(false)
  // const [timerStarted, setTimerStarted] = useState(false)
  
  const timer = useRef()
  const dialog=useRef()
  const [timeRemaining,setTimeRemaining]=useState(targetTime*1000)
  const timerIsActive=timeRemaining >0 && timeRemaining< targetTime *1000

  if (timeRemaining<=0){
    clearInterval(timer.current)
    // setTimeRemaining(targetTime)
    dialog.current.open()
  }

  const handleStart = () => {

    timer.current=setInterval(()=>{
      setTimeRemaining(prevTimeRemaining =>prevTimeRemaining-10)
    },10)

    // timer.current = setTimeout(() => {
    //   setTimerExpired(true)
    //   dialog.current.open()
    // }, targetTime * 1000)

    // setTimerStarted(true)
  }


  const handleStop = () => {
    dialog.current.open()
    clearInterval(timer.current)
  }

  const handleReset=()=>{
    setTimeRemaining(targetTime*1000)
  }
  return (
    <>
     <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Timer is Runing ...' : "Timer inactive"}
        </p>
      </section>
    </>
  )
}

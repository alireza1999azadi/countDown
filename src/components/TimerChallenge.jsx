import React from 'react'
import { useState } from 'react'

export default function TimerChallenge({ title, targetTime }) {

  const [timerExpired, setTimerExpired] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)
  const handleStart = () => {
    setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000)

    setTimerStarted(true)
  }

  function handleStop(){
    clearTimeout(timer)
  }
  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? 'stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Timer is Runing ...' : "Timer inactive"}
      </p>
    </section>
  )
}

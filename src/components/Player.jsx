import { useReducer, useRef, useState } from "react";

export default function Player() {

  const [playerName, setPlayerName] = useState(null)

  const player=useRef()

  // function handleChange(e) {
  //   setSubmitted(false)
  //   setPlayerName(e.target.value)
  // }

  function handleClick() {
    setPlayerName(player.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ?? "undifined"} </h2>
      <p>
        <input type="text" ref={player} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

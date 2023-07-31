import swoop from '../assets/swoop.wav'
import pop from '../assets/pop.wav'
import whoosh from '../assets/whoosh.wav'
import React from "react";

export const TestingSounds = () => {
  const playSound = () => {
    console.log("playing a sound")
    new Audio(whoosh).play()
    new Audio(pop).play()
  };

  return (
    <>
      <button
        style={{ width: "10vw", height: "5vw" }}
        onClick={() => playSound()}
      >
        Play a Sound!
      </button>
    </>
  );
};

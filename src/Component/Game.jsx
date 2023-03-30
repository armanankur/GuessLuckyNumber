import React, { useState } from "react";
import styled from "./Game.module.css";

const LuckyNumber = Math.floor(Math.random() * 10);

console.log(LuckyNumber);
const Game = () => {
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = () => {
    if (number < LuckyNumber) {
      alert("you guessed a smaller number .");
      setCount(count + 1);
      setNumber(" ");
    } else if (number > LuckyNumber) {
      alert("you guessed a Greater number .");
      setCount(count + 1);
      setNumber(" ");
    } else {
      alert("congratulations you guessed the right number count= " + count);
      setCount(0);
      setNumber(" ");
    }
  };
  return (
    <div className={styled.container}>
      <input
        type="number"
        placeholder="Enter any Number"
        onChange={handleChange}
        value={number}
      />
      <button className={styled.btn} onClick={handleClick}>
        Match Number
      </button>
    </div>
  );
};

export default Game;

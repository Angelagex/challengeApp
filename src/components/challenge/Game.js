import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Game = () => {

  const [dificultad, setDificultad] = useState("facil")   
  const { question } = useSelector((state) => state.question);
  const [restantes, setRestantes] = useState(5)

  let random = Math.floor(Math.random() * lngt);
    let pregunta = arr.splice(random, 1);

  return (
    <div>
      <Link to="/home" className="returnbutton">
        <BsChevronLeft />
      </Link>
      Game
    </div>
  );
};

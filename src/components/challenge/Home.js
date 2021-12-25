import React from "react";
import { Navbar } from "./Navbar";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const Home = () => {
  const name = useSelector((state) => state.auth.name);

  return (
    <div className="container-p">
      <p className="name">¡Bienvenido/a {name}!</p>
      <Link to="/game" className="Link">
        <Button variant="outline-warning" className="PlayButton" size="lg">
          &lt; Play &gt;
        </Button>
      </Link>
      <Navbar />
    </div>
  );
};

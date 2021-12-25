import React from "react";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import {
  BsController,
  BsCode,
  BsAwardFill,
  BsPersonCircle,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { uid, photoURL } = useSelector((state) => state.auth);

  return (
    <>
      <Nav defaultActiveKey="/" className="flex-column Navbar">
        <Link to="/" className="Link">
          <Nav.Item className="NavItem">
            <BsController />
          </Nav.Item>
        </Link>
        <Link to="/leaderboard" className="Link">
          <Nav.Item className="NavItem">
            <BsAwardFill />
          </Nav.Item>
        </Link>
        <Link to="/profile" className="Link">
          <Nav.Item className="NavItem">
            <BsPersonCircle />
          </Nav.Item>
        </Link>

        {uid === "ORC28ljHV7gBwshnCnTpqsw8ws22" ? (
          <Link to="/dev" className="Link">
            <Nav.Item className="NavItem">
              <BsCode />
            </Nav.Item>
          </Link>
        ) : null}
      </Nav>
    </>
  );
};

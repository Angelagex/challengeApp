import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { BsPlusLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export const Dev = () => {
  const { question } = useSelector((state) => state.question);

  const handleDelete = (item) => {
    console.log(item);
  };

  return (
    <div className="container-dev">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 Tabs"
      >
        <Tab eventKey="easy" title="Fácil" classNa>
          <div>
            {question.map((item, idx) => {
              return item.dificultad === "facil" ? (
                <div className="deleteQ">
                  <p>{item.enunciado}</p>
                  <BsPlusLg
                    onClick={(item) => handleDelete(item)}
                    className="deleteButton"
                  />
                </div>
              ) : null;
            })}
          </div>
        </Tab>
        <Tab eventKey="mid" title="Medio">
          <div>
            {question.map((item, idx) => {
              return item.dificultad === "media" ? (
                <div className="deleteQ">
                  <p>{item.enunciado}</p>
                  <BsPlusLg
                    onClick={(item) => handleDelete(item)}
                    className="deleteButton"
                  />
                </div>
              ) : null;
            })}
          </div>
        </Tab>
        <Tab eventKey="plus" title="Elevado">
          <div>
            {question.map((item, idx) => {
              return item.dificultad === "elevada" ? (
                <div className="deleteQ">
                  <p>{item.enunciado}</p>
                  <BsPlusLg
                    onClick={(item) => handleDelete(item)}
                    className="deleteButton"
                  />
                </div>
              ) : null;
            })}
          </div>
        </Tab>
        <Tab eventKey="hard" title="Difícil">
          <div>
            {question.map((item, idx) => {
              return item.dificultad === "dificil" ? (
                <div className="deleteQ">
                  <p>{item.enunciado}</p>
                  <BsPlusLg
                    onClick={(item) => handleDelete(item)}
                    className="deleteButton"
                  />
                </div>
              ) : null;
            })}
          </div>
        </Tab>
        <Tab eventKey="veteran" title="Veterano">
          <div>
            {question.map((item, idx) => {
              return item.dificultad === "veterano" ? (
                <div className="deleteQ">
                  <p>{item.enunciado}</p>
                  <BsPlusLg
                    onClick={(item) => handleDelete(item)}
                    className="deleteButton"
                  />
                </div>
              ) : null;
            })}
          </div>
        </Tab>
      </Tabs>
      <Link to="/addQ" className="addButton">
        <Button className="NavItem">
          <BsPlusLg />
        </Button>
      </Link>
      <Navbar />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { QuestionNew } from "../../actions/questionAction";

const AddQ = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    enunciado: "",
    dificultad: "",
    opc1: "",
    opc2: "",
    opc3: "",
    respuesta: "",
  });

  const { enunciado, dificultad, opc1, opc2, opc3, respuesta } = formValue;

  const handleNewQ = (e) => {
    console.log(formValue)
    dispatch(QuestionNew(formValue))
    e.preventDefault();
    reset();
  };

  return (
    <div className="container-q">
      <Link to="/dev" className="returnbutton">
        <BsChevronLeft />
      </Link>
      <div className="card container text-center">
        <h2>Agregar nueva pregunta</h2>
        <form className="card-body " onSubmit={handleNewQ}>
          <div className="form-group">
            <input
              type="text"
              name="enunciado"
              className="form-control mt-1"
              placeholder="Enunciado"
              value={enunciado}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="opc1"
              className="form-control mt-1"
              placeholder="Opción 1"
              value={opc1}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="opc2"
              className="form-control mt-1"
              placeholder="Opción 2"
              value={opc2}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="opc3"
              className="form-control mt-1"
              placeholder="Opción 3"
              value={opc3}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              name="respuesta"
              className="form-control mt-1"
              placeholder="Respuesta Correcta"
              value={respuesta}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mt-3">
            <label for="dificultad">Dificultad</label>
            <select
              id="dificultad"
              name="dificultad"
              className="form-control mt-1"
              value={dificultad}
              onChange={handleInputChange}
            >
              <option></option>
              <option>facil</option>
              <option>media</option>
              <option>elevada</option>
              <option>dificil</option>
              <option>veterano</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQ;

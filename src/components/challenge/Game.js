import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsChevronLeft } from "react-icons/bs";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export const Game = () => {
  const { question } = useSelector((state) => state.question);
  const [dificultad, setDificultad] = useState("facil");
  const [restantes, setRestantes] = useState(5);
  const [premio, setPremio] = useState(50);
  const [acumulado, setAcumulado] = useState(0);
  const [pregunta, setPregunta] = useState({});
  const [opciones, setOpciones] = useState([]);
  const [opcion, setOpcion] = useState("");
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  const handlePremio = () => {
    switch (dificultad) {
      case "facil":
        return setPremio(50);
      case "media":
        return setPremio(150);
      case "elevada":
        return setPremio(450);
      case "dificil":
        return setPremio(950);
      case "veterano":
        return setPremio(1550);
    }
  };

  const handleDificultad = () => {
    switch (restantes) {
      case 5:
        return setDificultad("facil");
      case 4:
        return setDificultad("media");
      case 3:
        return setDificultad("elevada");
      case 2:
        return setDificultad("dificil");
      case 1:
        return setDificultad("veterano");
    }
  };

  const nextAnsr = () => {
    handleDificultad();
    handlePremio();
    let random = Math.floor(Math.random() * 5);
    let preg = question
      .filter((item) => {
        if (item.dificultad === dificultad) return item;
      })
      .slice(random, random + 1);
    setPregunta(preg[0]);
    setOpciones(
      preg[0].opciones.sort(function () {
        return Math.random() - 0.5;
      })
    );
  };

  useEffect(() => {
    setRestantes(restantes - 1);
    nextAnsr();
    setLoaded(true);
  }, [loaded]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.persist();
    setOpcion(e.target.value);
  };

  const goBack = () => history.goBack();

  const handleExit = () => {
    Swal.fire({
      title: "¿Seguro/a que deseas salir?",
      text: `Podrías ganar ${premio}USD adicionales`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.value) {
        goBack();
      } else {
        Swal.close();
      }
    });
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (pregunta.respuesta === opcion) {
      if (restantes > 0) {
        Swal.fire({
          title: "¡Felicidades!",
          text: `Has ganado ${premio}USD`,
          icon: "success",
          confirmButtonText: "Siguiente pregunta",
        }).then((resultado) => {
          if (resultado.value) {
            setRestantes(restantes - 1);
            setAcumulado(acumulado + premio);
            return nextAnsr();
          }
        });
      } else {
        Swal.fire({
          title: "¡Felicidades!",
          text: `Has ganado un total de ${acumulado}USD`,
          icon: "success",
          confirmButtonText: "Terminar Partida",
        }).then((resultado) => {
          if (resultado.value) {
            setAcumulado(acumulado + premio);
            return goBack();
          }
        });
      }
    } else {
      Swal.fire({
        title: "Fallaste",
        text: `¡Mejor suerte para la proxima!`,
        icon: "error",
        confirmButtonText: "Terminar Partida",
      }).then((resultado) => {
        if (resultado.value) {
          setAcumulado(acumulado + premio);
          return goBack();
        }
      });
    }
  };

  return (
    <>
      <BsChevronLeft className="returnbutton" onClick={handleExit} />
      <div className="container-g">
        <div className="info">
          <p className="acumulado">Acumulado: {acumulado} USD</p>
          <h5 className="premio">Por un premio de: {premio} USD</h5>
        </div>
        <form className="mb-3 gameform" onSubmit={handleCheck}>
          <label className="formlabel" as="legend" column sm={2}>
            {pregunta.enunciado}
          </label>
          <Col sm={10}>
            {opciones.map((opc, idx) => (
              <label className="custom-radio-checkbox flex2" key={idx}>
                <p className="opciones">{opc}</p>
                <input
                  class="custom-radio-checkbox__input"
                  type="radio"
                  name="answer"
                  onChange={handleChange}
                  checked={opc === opcion}
                  value={opc}
                ></input>
                <span class="custom-radio-checkbox__show custom-radio-checkbox__show--radio"></span>
              </label>
            ))}
          </Col>
          <Button
            variant="outline-warning"
            type="submit"
            className="confirmButton"
            size="lg"
          >
            &lt; Confirmar &gt;
          </Button>
        </form>
      </div>
    </>
  );
};

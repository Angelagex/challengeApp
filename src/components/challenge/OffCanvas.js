import React from "react";
import { Offcanvas } from "react-bootstrap";
import { BsChevronLeft } from "react-icons/bs";

export const OffCanvas = (show, handleClose, dificultad) => {

  const handleDelete = (id) => {
    console.log(id)
  }
  
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        className="offCanvas"
      >
        <Offcanvas.Body className="offCanvasBody">
          {dificultad.map((item, idx) => (
              <div className="questionDevItem" index={idx}>
                {item.enunciado}
                <BsChevronLeft onClick={(item) => handleDelete(item.id)} />
              </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

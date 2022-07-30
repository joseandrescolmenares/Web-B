import React from "react";
import s from "./css/Card.module.css";
import { useState } from "react";
import { Modal } from "@material-ui/core";
import Producto from "./Producto";

const Cards = ({ titulo, id, imagen, descripcion, precio }) => {
  const [cierre, setCierre] = useState(false);

  const abrieCerrar = () => {
    setCierre(!cierre);
  };

  return (
    <div className={s.container}>
      <h1>{titulo}</h1>
      <img className={s.img} src={imagen} alt="imgen" />
      <p>{id}</p>
      <p className={s.descripcion}>{descripcion}</p>
      <p>{precio}</p>
      <button onClick={abrieCerrar}>ver mas</button>

      <Modal className={s.centrar} open={cierre} onClose={abrieCerrar}>
        <Producto id={id} />
      </Modal>
    </div>
  );
};
export default Cards;

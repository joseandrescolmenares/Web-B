import React from "react";
import s from "./css/Card.module.css";
const Cards = ({ titulo, id, imagen, descripcion, precio }) => {
  return (
    <div className={s.container}>
      <h1>{titulo}</h1>
      <img className={s.img} src={imagen} alt="imgen" />
      <p>{id}</p>
      <p className={s.descripcion}>{descripcion}</p>
      <p>{precio}</p>
       <button>ver mas</button>
    </div>
  );
};
export default Cards;

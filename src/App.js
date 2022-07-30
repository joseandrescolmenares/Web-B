import s from "./css/App.module.css";
import precios from "./data";
import Cards from "./Card";

function App() {
  return (
    <div className={s.conte_padre}>
      <div className={s.container}>
        {precios.map((el) => (
          <Cards
            key={el.id}
            id={el.id}
            titulo={el.titulo}
            descripcion={el.descripcion}
            imagen={el.imagen}
            precio={el.precio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

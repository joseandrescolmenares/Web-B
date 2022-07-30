import  React, {useState} from 'react';
import precios from './data'
import s from './css/Producto.module.css'

const Producto = ({id}) => {

const [state, setState] = useState(precios);
const newProducto = state.find(el => el.id === id)

return (
    <>
     <div className={s.modal}>
        <h1>{newProducto.titulo}</h1>
         <img className={s.img} src={newProducto.imagen} alt='img'/>
         <p>{newProducto.id}</p>
         <p> Precio: {newProducto.precio}</p>
         <h2>Descripcion: </h2>
         <p className={s.descripcion}>{newProducto.descripcion}</p>
         <h2> Puntaje: {newProducto.puntaje}</h2>
         <p> Cantidad : {newProducto.cantidad}</p>
     </div>
    
     
    </>
)
}



export default Producto;
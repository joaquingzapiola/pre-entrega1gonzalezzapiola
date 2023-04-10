import { useState, useContext } from "react";
import "./ItemCount.css";
import { NavLink } from "react-router-dom";
import { Context } from "../../context";

export const ItemCount = ({ onAdd, initial, stock }) => {
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  const { onAdded, onRemove } = useContext(Context);

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock}
        >
          +
        </button>
      </div>
      <button
        className="buttonAñadir"
        onClick={() => onAdd(qty)}
        disabled={qty === stock + 1}
      >
        Añadir productos
      </button>
      <button className="buttonAñadir" onClick={onRemove}>
        Remover productos
      </button>
      <button className="buttonVolver">
        <NavLink className="aVolver" to="/">
          Volver
        </NavLink>
      </button>
    </div>
  );
};

import Products from "../../mocks/Products";
import { useContext, useState } from "react";
import { Context } from "../../context";
import "./cart.css";
import { Link } from "react-router-dom";

const product = Products;
export const Cart = () => {
  const { itemsAddedQty, clear, onRemove, totalAmount } = useContext(Context);
  const [finishedPurchase, setFinishedPurchase] = useState(false);

  const handleFinishPurchase = () => {
    setFinishedPurchase(true);
    clear();
    alert("¡Felicitaciones! Has realizado tu compra con éxito");
  };

  if (finishedPurchase) {
    return (
      <div className="cartContainer">
        <h2>Felicitaciones, ¡tu compra se ha realizado con éxito!</h2>
        <Link className="linkVolverCart" to="/">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  if (itemsAddedQty.length === 0) {
    return (
      <div className="cartContainer">
        <p>No hay ítems en el carrito : ( </p>
        <Link className="linkVolverCart" to="/">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <table className="cartTable">
        <thead>
          <tr>
            <th className="cartTh">Producto</th>
            <th className="cartTh">Imagen</th>
            <th className="cartTh">Cantidad</th>
            <th className="cartTh">Precio unitario</th>
            <th className="cartTh">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {itemsAddedQty.map(
            (item) => (
              console.log(
                "item price:",
                item.price,
                "item quantity:",
                item.quantity,
                "subtotal:",
                item.price * item.quantity
              ),
              (
                <tr key={item.id}>
                  <td className="cartTd">{item.title}</td>
                  <td className="cartTd">
                    <img src={item.image} alt={item.title} />
                  </td>
                  <td className="cartTd">{item.quantity}</td>
                  <td className="cartTd">${item.price}</td>
                  <td className="cartTd">
                    $
                    {Number.isNaN(item.price) || Number.isNaN(item.quantity)
                      ? "N/A"
                      : item.price * item.quantity}
                  </td>
                  <td className="cartTd">
                    <button onClick={() => onRemove(item.id)}>Eliminar</button>
                  </td>
                </tr>
              )
            )
          )}
          <tr>
            <td colSpan="5">
              <div className="totalContainerCart">
                <ul>
                  {itemsAddedQty.map((item) => (
                    <li key={item.id}>
                      {item.name} x{item.quantity} - ${item.price}
                    </li>
                  ))}
                </ul>
                <p className="totalCart">Total: ${totalAmount}</p>
                <button className="cartButton" onClick={handleFinishPurchase}>
                  Terminar compra
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="cartButton" onClick={clear}>
        Vaciar Carrito
      </button>
    </div>
  );
};

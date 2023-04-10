import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Carrito from "../../assets/carrito-de-compras.png";
import { Link } from "react-router-dom";
import Products from "../../mocks/Products";
import "./cartWidget.css";
import carrito from "../../assets/carrito-de-compras.png";

import { FiShoppingCart } from "react-icons/fi";
import { Context } from "../../context";
const product = Products;

export const CartWidget = () => {
  const { itemsAddedQty } = useContext(Context);
  const itemsCount = itemsAddedQty.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (itemsCount === 0) {
    return null;
  }

  return (
    <div>
      <Link to="/cart">
        <FiShoppingCart size={24} className="imgWidget" />
        <span className="spanWidget">{itemsCount}</span>
      </Link>
    </div>
  );
};

export default CartWidget;

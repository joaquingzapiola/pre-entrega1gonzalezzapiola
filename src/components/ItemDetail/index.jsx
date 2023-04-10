import React, { useState, useContext } from "react";
import Products from "../../mocks/Products";
import { ItemCount } from "../ItemCount";
import { Context } from "../../context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const product = Products;

const ItemDetail = ({ product }) => {
  const { onAdded, clear } = useContext(Context);
  const [compra, setCompra] = useState(false);

  function onAddProduct(qty) {
    setCompra(qty);
    onAdded(product, qty);
  }

  return (
    <div style={{ marginTop: "8rem" }}>
      <Card style={{ display: "flex", flexDirection: "row" }}>
        <Card.Img
          style={{ height: "19rem" }}
          variant="bottom"
          src={product.image}
        />
        <Card.Body className="cardItem">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>Stock disponible: {product.stock}</Card.Title>
          {compra ? (
            <div>
              <Link to="/cart">
                <button>Ir al carrito</button>
              </Link>
              <br />
              <button onClick={clear}>Limpiar Carrito</button>
              <br />
              <Link to="/">
                <button>Volver</button>
              </Link>
            </div>
          ) : (
            <ItemCount onAdd={onAddProduct} initial={1} stock={product.stock} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;

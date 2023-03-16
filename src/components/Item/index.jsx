import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "./item.css";

function Item({ product }) {
  return (
    <Card style={{ display: "flex", flexDirection: "row" }}>
      <Card.Img
        style={{ height: "19rem" }}
        variant="bottom"
        src={product.pictureUrl}
      />
      <Card.Body className="cardItem">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Stock: {product.stock}</Card.Text>
        <Button variant="outline-dark">Agregar al carrito</Button>
        <div style={{ marginTop: "1rem" }}>
          <NavLink className="aBotonDetalle" to={`/item/${product.id}`}>
            Detalle
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;

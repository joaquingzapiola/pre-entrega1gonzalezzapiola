import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function Item({ product }) {
  return (
    <Card style={{ display: "flex", flexDirection: "row" }}>
      <Card.Img
        style={{ width: "25rem" }}
        variant="bottom"
        src={product.pictureUrl}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Stock: {product.stock}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="outline-dark">Agregar al carrito</Button>
        <Button variant="outline-dark" style={{ marginLeft: "5px" }}>
          <NavLink to={`/item/${product.id}`}>Detalle</NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;

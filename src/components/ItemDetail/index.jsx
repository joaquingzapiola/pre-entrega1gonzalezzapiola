import Products from "../../mocks/Products";
import { ItemCount } from "../ItemCount";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const product = Products;
const ItemDetail = ({ product }) => {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };
  return (
    <div style={{ marginTop: "8rem" }}>
      <Card style={{ display: "flex", flexDirection: "row" }}>
        <Card.Img
          style={{ height: "19rem" }}
          variant="bottom"
          src={product.pictureUrl}
        />
        <Card.Body className="cardItem">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.longDescription}</Card.Text>
          <ItemCount onAdd={onAdd} initial={0} stock={product.stock} />
        </Card.Body>
      </Card>
    </div>
  );
};
export default ItemDetail;

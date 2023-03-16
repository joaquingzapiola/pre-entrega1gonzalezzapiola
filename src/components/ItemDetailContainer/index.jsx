import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "../../mocks/Products";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer({ detalleProducto }) {
  const [product, setProducto] = useState({});

  useEffect(() => {
    const productoDetail = product.find(
      (product) => product.id == detalleProducto
    );
    setProducto(productoDetail);
  }, [detalleProducto]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;

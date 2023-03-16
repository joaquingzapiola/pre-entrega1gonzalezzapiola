import Item from "../Item";
import "./itemList.css";

function ItemList({ products }) {
  return (
    <div className="contenedorItemList">
      <ul className="productosItemList">
        {products.map((product, index) => (
          <Item product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

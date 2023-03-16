import Products from "../../mocks/Products";
import { ItemCount } from "../ItemCount";

const product = Products;
const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>
        {product.name} - ${product.price}
      </h2>
      <div>
        <img src={product.pictureUrl} alt={product.name} />
        <div>
          <p>{product.longDescription}</p>
          {/* <ItemCount onAdd={onAdd} initial={0} stock={10} /> */}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;

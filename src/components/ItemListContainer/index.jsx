import { ItemCount } from "../ItemCount";
import Products from "../../mocks/Products";
import { useEffect, useState } from "react";
import ItemList from "../ItemList";

export const ItemListContainer = ({ categoryId, isCategoryRoute }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 2000)
    );

    productsPromise
      .then((response) => {
        if (isCategoryRoute) {
          const productsFiltered = response.filter(
            (product) => product.category === categoryId
          );
          setProducts(productsFiltered);
        } else {
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import {
  Firestore,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({ categoryId, isCategoryRoute }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("categroy", "==", categoryId)
      );
      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    }
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

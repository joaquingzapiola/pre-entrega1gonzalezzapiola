import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});

  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", params.id);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.log({ error }));
  }, []);

  console.log({ product });

  if (!product) {
    return <p>Cargando página...</p>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;

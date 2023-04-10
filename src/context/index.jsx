import { useState, createContext, useEffect } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const Context = createContext();

function CustomProvider({ children }) {
  const [itemsAddedQty, setItemsAddedQty] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isOrderCreated, setIsOrderCreated] = useState(false);
  const db = getFirestore();

  const onAdded = (product, quantity) => {
    const isAlreadyAdded = isInCart(product);
    if (isAlreadyAdded) {
      const productToModify = itemsAddedQty.find(
        (itemsAddedQty) => itemsAddedQty.id === product.id
      );

      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };

      setItemsAddedQty((prev) =>
        prev.map((itemsAddedQty) =>
          itemsAddedQty.id === product.id ? productModified : itemsAddedQty
        )
      );
    } else {
      setItemsAddedQty((prev) => prev.concat({ ...product, quantity }));
    }
  };

  const isInCart = (product) => {
    return itemsAddedQty.some(
      (itemsAddedQty) => itemsAddedQty.id === product.id
    );
  };

  const onRemove = (id) => {
    const cartAct = itemsAddedQty.slice(1);
    setItemsAddedQty(cartAct);
  };

  function clear() {
    setItemsAddedQty([]);
    setTotalAmount(0);
  }

  const calculateTotal = () => {
    let total = 0;
    itemsAddedQty.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);
    const order = {
      buyer: { name: "Joaquin", email: "sdada@gmail.com", phone: "23232323" },
      items: itemsAddedQty,
      total,
    };

    const db = getFirestore();
    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order)
      .then((response) => {
        const orderId = response.id;
        itemsAddedQty.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));
  };
  useEffect(() => {
    calculateTotal();
  }, [itemsAddedQty]);

  useEffect(() => {
    if (isOrderCreated) {
      calculateTotal();
    }
  }, [isOrderCreated]);

  const updateOrder = (productId, finalStock) => {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.log({ error })
    );
  };

  const value = {
    itemsAddedQty,
    onAdded,
    onRemove,
    clear,
    totalAmount,
    calculateTotal,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default CustomProvider;

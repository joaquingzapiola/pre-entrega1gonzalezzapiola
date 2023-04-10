import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";

function ItemRoot() {
  const params = useParams();

  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
}

export default ItemRoot;

import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";

function ItemRoot() {
  const params = useParams();
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer detalleProducto={params.id} />
    </div>
  );
}

export default ItemRoot;

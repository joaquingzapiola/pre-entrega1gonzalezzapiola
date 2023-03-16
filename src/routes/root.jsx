import { useParams } from "react-router-dom";
import "../App.css";
import { NavBar } from "../components/NavBar";
import { ItemListContainer } from "../components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./root.css";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  console.log({ isCategoryRoute });

  return (
    <div className="App">
      <NavBar />
      <div className="divRoot">
        <h1>Viajar</h1>
        <p>Tu página definitiva</p>
      </div>
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Root;

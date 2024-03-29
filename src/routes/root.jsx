import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ItemListContainer } from "../components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./root.css";
import Footer from "../components/Footer";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  console.log({ isCategoryRoute });

  return (
    <div className="App">
      <NavBar />
      <div className="divRoot">
        <h1 className="titleRoot">Viajar</h1>
        <p className="titleRoot">Tu página definitiva</p>
      </div>
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
      <Footer />
    </div>
  );
}

export default Root;

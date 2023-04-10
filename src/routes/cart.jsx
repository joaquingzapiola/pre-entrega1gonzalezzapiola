import { NavBar } from "../components/NavBar";
import { useParams } from "react-router-dom";
import { CartContainer } from "../components/CartContainer";
function Cart() {
  const params = useParams();

  return (
    <div>
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default Cart;

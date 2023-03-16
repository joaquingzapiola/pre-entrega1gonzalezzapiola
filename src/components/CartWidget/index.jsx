import Button from "react-bootstrap/Button";
import Carrito from "../../assets/carrito-de-compras.png";

export const CartWidget = () => {
  return (
    <div className="d-flex">
      <Button variant="outline-dark">
        <a href="#">Carrito</a>
        <span className="badge bg-dark text-white ms-1 rounded-pill">3</span>
        <img src={Carrito} alt="carrito de compras" />
      </Button>
    </div>
  );
};

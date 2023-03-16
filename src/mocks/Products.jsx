import imagen1 from "../assets/image/llao-llao.jpg";
import imagen2 from "../assets/image/villa-de-las-rosas-1.jpg";
import imagen3 from "../assets/image/san-martín-de-los-andes.jpg";
import imagen4 from "../assets/image/carmen-de-areco.webp";
import imagen5 from "../assets/image/usuahia.jpeg";

export default [
  {
    id: 1,
    name: "Bariloche - Rio Negro",
    longDescription:
      "14 días en Bariloche con todo incluido p/cuatro personas (*incluye transporte)",
    stock: 4,
    pictureUrl: imagen1,
    price: "$250.000",
    category: "sur",
  },
  {
    id: 2,
    name: "Villa de las Rosas - Cordoba",
    longDescription:
      "7 días en complejo de cabañas p/dos personas (*no incluye transporte)",
    stock: 7,
    pictureUrl: imagen2,
    price: "$170.000",
    category: "norte",
  },
  {
    id: 3,
    name: "San Martin de los Andes",
    longDescription:
      "10 días en complejo all-inclusive p/dos personas (*incluye aereo)",
    stock: 15,
    pictureUrl: imagen3,
    price: "$300.000",
    category: "sur",
  },
  {
    id: 4,
    name: "Carmen de Areco",
    longDescription:
      "Glamping en campo privado p/seis personas + asado completo + jineteada",
    stock: 12,
    pictureUrl: imagen4,
    price: "$350.000",
    category: "pampa",
  },
  {
    id: 5,
    name: "Usuahia",
    longDescription: "Travesia de 4 días al fin del mundo p/cuatro personas",
    stock: 5,
    pictureUrl: imagen5,
    price: "$150.000",
    category: "sur",
  },
];
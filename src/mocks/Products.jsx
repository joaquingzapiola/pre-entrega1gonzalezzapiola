import imagen1 from "../assets/image/llao-llao.jpg";
import imagen2 from "../assets/image/villa-de-las-rosas-1.jpg";
import imagen3 from "../assets/image/san-martín-de-los-andes.jpg";
import imagen4 from "../assets/image/carmen-de-areco.webp";
import imagen5 from "../assets/image/usuahia.jpeg";

export default [
  {
    id: 1,
    title: "Bariloche - Rio Negro",
    description:
      "Disfruta de 14 días en Bariloche con todo incluido p/cuatro personas (*incluye transporte). El paquete incluye alojamiento en hotel 5 estrellas con todos los servicios y comodidades para que puedas disfrutar al máximo de tu estancia en Bariloche. El hotel está ubicado en un lugar privilegiado, rodeado de la majestuosa belleza natural de la Patagonia. Durante estos dos días tendrás la oportunidad de disfrutar visitando los mejores lugares de Bariloche. Puedes visitar el Cerro Catedral y disfrutar de una hermosa vista de la ciudad y los lagos. Puedes caminar por el Parque Nacional Nahuel Huapi y admirar la belleza de la naturaleza. ",
    stock: 4,
    image: imagen1,
    price: 250000,
    category: "sur",
  },
  {
    id: 2,
    title: "Villa de las Rosas - Cordoba",
    description:
      "7 días en complejo de cabañas p/dos personas (*no incluye transporte)",
    stock: 7,
    image: imagen2,
    price: 170000,
    category: "norte",
  },
  {
    id: 3,
    title: "San Martin de los Andes",
    description:
      "10 días en complejo all-inclusive p/dos personas (*incluye aereo)",
    stock: 15,
    image: imagen3,
    price: 300000,
    category: "sur",
  },
  {
    id: 4,
    title: "Carmen de Areco",
    description:
      "Glamping en campo privado p/seis personas + asado completo + jineteada",
    stock: 12,
    image: imagen4,
    price: 350000,
    category: "pampa",
  },
  {
    id: 5,
    title: "Usuahia",
    description: "Travesia de 4 días al fin del mundo p/cuatro personas",
    stock: 5,
    image: imagen5,
    price: 150000,
    category: "sur",
  },
];

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Subscribite para recibir información</strong>
                </p>
              </MDBCol>
              <MDBCol md="5" start>
                <MDBInput contrast type="email" className="mb-4" />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            ¡Bienvenido a nuestra agencia de viajes en Argentina! Ofrecemos una
            amplia variedad de paquetes turísticos diseñados para satisfacer tus
            necesidades de viaje. Desde la vibrante ciudad de Buenos Aires hasta
            las impresionantes cataratas del Iguazú, tenemos todo lo que
            necesitas para vivir la mejor experiencia de viaje en Argentina.{" "}
            <br />
            Nuestros paquetes turísticos incluyen alojamiento de alta calidad,
            transporte seguro y confiable, guías expertos y actividades
            emocionantes para que puedas disfrutar al máximo de tu viaje. <br />
            Además, trabajamos con los mejores proveedores locales para
            ofrecerte precios competitivos y garantizar la satisfacción de
            nuestros clientes. Ya sea que estés interesado en explorar la
            naturaleza en la Patagonia, disfrutar de la gastronomía local en
            Mendoza o descubrir la rica cultura del norte de Argentina, tenemos
            el paquete perfecto para ti. ¡No esperes más y reserva tu viaje con
            nosotros hoy mismo!
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright -
        <a className="text-white" href="#">
          - Viajar.com
        </a>
      </div>
    </MDBFooter>
  );
}

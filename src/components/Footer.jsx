import React from "react";
import "./sideBar.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="menu">
          <a href="index.html">Web Barber Shop</a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            a beatae. Eum debitis vitae ducimus laboriosam veritatis quas
            doloremque cum!
          </p>
        </div>
        <div className="menu2">
          <h2>Contato</h2>
          <p>
            <img src="/public/mapa.png" alt="endereço"></img>São mateus - São
            Paulo
          </p>
          <p>
            <img src="/public/whatsapp.png" alt="whatsapp"></img>WhatsApp: (11)
            00000-0000
          </p>
          <p>
            <img src="./public/msg2.png" alt=""></img>
            barbershop@gmail.com
          </p>
        </div>
        <div className="menu3">
          <div className="redes">
            <a id="facebook" href="#"></a>
            <a id="instagram" href="#"></a>
            <a id="linkedin" href="#"></a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

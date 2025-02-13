import React from "react";
import "./sideBar.css";

function Sobre() {
  return (
    <>
      <div className="sobre">
        <h2>Sobre Nós</h2>
        <p>
          Texto Descritivo sobre sua barbearia, é possível modifcar depois de
          acordo com sua preferencia através do paínel admin
        </p>
        <button className="btn-info">Mais Informações</button>
      </div>
    </>
  );
}

export default Sobre;

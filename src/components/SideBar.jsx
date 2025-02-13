import React from "react";
import Modo from "./Modo";
import "./sideBar.css";

function SideBar() {
  const openNav = () => {
    document.querySelector(".sidebar").style.width = "250px"; // Alterando o width da sidebar
  };

  const closeNav = () => {
    document.querySelector(".sidebar").style.width = "0";
  };

  return (
    <>
      <Modo openNav={openNav} />
      <div className="sidebar" style={{ width: "0" }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <img id="icon2" src="./public/icon.png" alt=""></img>
        <a href="index.html">Home</a>
        <a href="agendamento.html">Agendamentos</a>
        <a href="#">Assinaturas</a>
        <a href="produtos.html">Produtos</a>
        <a href="servicos.html">Serviços</a>
        <a href="login.html">Acesso</a>
      </div>
    </>
  );
}

export default SideBar;

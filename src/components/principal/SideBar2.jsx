import "../style.css";

function SideBar2() {
  return (
    <>
        <div className="container">
          <img id="icon" src="./img/icon.png" alt=""></img>
          <a id="barber" href="index.html">
            Web Barber Shop
          </a>
          <a href="index.html">Home</a>
          <a href="agendamento.html">Agendamentos</a>
          <a href="produtos.html">Produtos</a>
          <a href="servicos.html">Serviços</a>
        </div>
    </>
  );
}

export default SideBar2;

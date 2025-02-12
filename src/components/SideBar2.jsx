import "./sideBar.css";

function SideBar2() {
  return (
    <>
      <div className="container">
        <img id='icon' src='./src/imagens/icon.png' alt=''></img>
        <a id='barber' href="#">Web Barber Shop</a>
        <a href="index.html">Home</a>
        <a href="agendamento.html">Agendamentos</a>
        <a href="#">Assinaturas</a>
        <a href="produtos.html">Produtos</a>
        <a href="servico.html">Serviços</a>
        <a href="login.html">Acesso</a>
      </div>
    </>
  );
}

export default SideBar2;
import Active from "../../header/Active";
import Footer from "../../footer/Footer";

function Produtos() {
  return (
    <>
    <div className="back2">
      <Active />
    </div>
      <div className="info-prods">
        <h2>Nossos Produtos</h2>
        <p>
          Confira alguns de nossos produtos, damos desconto caso compre em
          grande quantidade.
        </p>
      </div>
      <div className="catalog-prods"></div>
      <Footer />
    </>
  );
}

export default Produtos;

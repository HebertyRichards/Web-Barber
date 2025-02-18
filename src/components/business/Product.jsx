import React from "react";
import "../style.css";

function Product() {
  return (
    <>
      <div className="info-prods">
        <h2>Nossos Produtos</h2>
        <p>
          Confira alguns de nossos produtos, damos desconto caso compre em
          grande quantidade.
        </p>
      </div>
      <div className="catalog-prods"></div>
    </>
  );
}

export default Product;

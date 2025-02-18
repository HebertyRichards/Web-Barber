import Active from "./components/principal/Active";
import Text from "./components/index/SliderText";
import MainProduct from "./components/index/MainProduct";
import Sobre from "./components/index/Sobre";
import Footer from "./components/principal/Footer";

function App() {
  return (
    <>
      <div className="back">
        <Active />
        <Text />
      </div>
      <Sobre />
      <MainProduct />
      <Footer />
    </>
  );
}

export default App;

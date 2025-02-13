import Active from "./components/Active";
import Text from "./components/SliderText";
import MainProduct from "./components/MainProduct";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

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

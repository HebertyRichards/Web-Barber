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
      <MainProduct />
      <Sobre />
      <Footer />
    </>
  );
}

export default App;

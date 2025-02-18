import Active from "../../header/Active";
import SliderText from "../../components/SliderText";
import Sobre from "../../components/Sobre";
import MainProduct from "../../components/MainProduct";
import Footer from "../../footer/Footer";
import "../../style.css";

function Home() {
    return (
        <>
        <div className='back'>
        <Active />
        <SliderText />
        </div>
        <Sobre />
        <MainProduct />
        <Footer />
        </>
    )
}

export default Home;
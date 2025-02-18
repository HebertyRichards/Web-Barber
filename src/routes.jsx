import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index/Home";
import Agendamento from "./pages/agendamentos/Diary";
import Produtos from "./pages/produtos/Product";
import Servicos from "./pages/servicos/Service";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/agendamento" element={<Agendamento />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/servicos" element={<Servicos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

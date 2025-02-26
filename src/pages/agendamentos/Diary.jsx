import { useState, useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import "../../style.css";

function Agendamento() {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(getDataAtual());
  }, []);

  function getDataAtual() {
    return new Date().toISOString().split("T")[0];
  }

  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="back-forms">
        <form id="formulario">
          <div className="num-date">
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              placeholder="Telefone com DD"
            ></input>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu Nome"
            ></input>
          </div>
          <div className="date-hour">
            <input
              type="date"
              name="data"
              value={data}
              min={getDataAtual()}
              onChange={(e) => setData(e.target.value)}
              required
            />
            <select id="horario" name="horario" required>
              <option value="">Horário</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
          <div className="cut-info">
            <select
              id="servico"
              name="servico"
              required
              placeholder="Selecione um Serviço"
            >
              <option value="">Selecione</option>
              <option value="corte">Corte - R$35,00</option>
              <option value="barba">Barba - R$30,00</option>
              <option value="corte_barba">Bigode - R$5,00</option>
              <option value="corte_barba">Sobrancelha - R$5,00</option>
              <option value="corte_barba">Corte + Barba - R$60,00</option>
              <option value="corte_barba">
                Corte + Bigode + Sobrancelha - R$40,00
              </option>
              <option value="corte_barba">Penteado - R$20,00</option>
              <option value="corte_barba">Máquina Geral - R$15,00</option>
              <option value="corte_barba">Luzes - R$70,00</option>
            </select>
          </div>
          <div className="barber-infos">
            <select
              id="barbeiro"
              name="barbeiro"
              required
              placeholder="Selecione um Barbeiro"
            >
              <option value="">Selecione</option>
              <option value="joao">João</option>
              <option value="carlos">Carlos</option>
              <option value="pedro">Pedro</option>
            </select>
          </div>
          <div className="btn-confirm">
            <button type="submit">Confirmar Agendamento</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Agendamento;

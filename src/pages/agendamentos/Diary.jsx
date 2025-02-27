import { useState, useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import "../../style.css";

function Agendamento() {
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");
  const [servico, setServico] = useState("");
  const [barbeiro, setBarbeiro] = useState("");

  useEffect(() => {
    setData(getDataAtual());
  }, []);

  function getDataAtual() {
    return new Date().toISOString().split("T")[0];
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const agendamento = {
      nome_cliente: nome,
      telefone,
      data_agendamento: data,
      horario,
      servico,
      barbeiro,
    };

    try {
      const response = await fetch(
        "https://web-barber-production.up.railway.app/agendar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(agendamento),
        }
      );

      if (response.ok) {
        alert("Agendamento realizado com sucesso!");
      } else {
        alert("Erro ao agendar, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar agendamento:", error);
    }
  };

  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="back-forms">
        <form id="formulario" onSubmit={handleSubmit}>
          <div className="num-date">
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              placeholder="Telefone com DD"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
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
            <select
              id="horario"
              name="horario"
              required
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            >
              <option value="">Horário</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
            </select>
          </div>
          <div className="cut-info">
            <select
              id="servico"
              name="servico"
              required
              value={servico}
              onChange={(e) => setServico(e.target.value)}
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
              value={barbeiro}
              onChange={(e) => setBarbeiro(e.target.value)}
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

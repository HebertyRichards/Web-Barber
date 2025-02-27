const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL");
});

app.post("/agendar", (req, res) => {
  const {
    nome_cliente,
    telefone,
    data_agendamento,
    horario,
    servico,
    barbeiro,
  } = req.body;

  const sql =
    "INSERT INTO agendamentos (nome_cliente, telefone, data_agendamento, horario, servico, barbeiro) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [nome_cliente, telefone, data_agendamento, horario, servico, barbeiro],
    (err, result) => {
      if (err) {
        console.error("Erro ao inserir no banco:", err);
        return res.status(500).json({ message: "Erro ao salvar agendamento" });
      }
      res.status(201).json({ message: "Agendamento criado com sucesso!" });
    }
  );
});

app.listen(3001, () => {
  console.log("🚀 Servidor rodando na porta 3001");
});

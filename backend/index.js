const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const cors = require("cors");

app.use(
  cors({
    origin: "https://web-barber-xi.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
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

  pool.query(
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

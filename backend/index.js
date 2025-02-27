const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const fetch = require("node-fetch");
const twilio = require("twilio");
require("dotenv").config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://web-barber-xi.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
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
  connectTimeout: 10000,
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
    async (err, result) => {
      if (err) {
        console.error("Erro ao inserir no banco:", err);
        return res.status(500).json({ message: "Erro ao salvar agendamento" });
      }

      const client = new twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );
      const mensagem = `Olá ${nome_cliente}, seu agendamento para ${servico} com ${barbeiro} foi confirmado para ${data_agendamento} às ${horario}.`;

      try {
        const message = await client.messages.create({
          body: mensagem,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: `+55${telefone}`,
        });
        console.log("SMS enviado com sucesso:", message.sid);
      } catch (error) {
        console.error("Erro ao enviar SMS:", error);
      }

      res.status(201).json({ message: "Agendamento criado com sucesso!" });
    }
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

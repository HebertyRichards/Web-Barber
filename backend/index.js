const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
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

const transporter = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    apiKey: process.env.SENDGRID_API_KEY,
  },
});

function enviarEmail(clienteEmail, nome, data, horario, servico, barbeiro) {
  const mailOptions = {
    from: "heberynho@gmail.com",
    to: clienteEmail,
    subject: "Confirmação de Agendamento",
    text: `Olá ${nome},\n\nSeu agendamento foi confirmado!\n\nData: ${data}\nHorário: ${horario}\nServiço: ${servico}\nBarbeiro: ${barbeiro}\n\nObrigado!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erro ao enviar e-mail:", error);
    } else {
      console.log("E-mail enviado:", info.response);
    }
  });
}

app.post("/agendar", (req, res) => {
  const {
    nome_cliente,
    telefone,
    email,
    data_agendamento,
    horario,
    servico,
    barbeiro,
  } = req.body;

  if (!telefone && !email) {
    return res
      .status(400)
      .json({ message: "Por favor, preencha o telefone ou o email." });
  }

  const sql =
    "INSERT INTO agendamentos (nome_cliente, telefone, email, data_agendamento, horario, servico, barbeiro) VALUES (?, ?, ?, ?, ?, ?, ?)";

  pool.query(
    sql,
    [
      nome_cliente,
      telefone,
      email,
      data_agendamento,
      horario,
      servico,
      barbeiro,
    ],
    (err, result) => {
      if (err) {
        console.error("Erro ao inserir no banco:", err);
        return res.status(500).json({ message: "Erro ao salvar agendamento" });
      }

      if (email) {
        enviarEmail(
          email,
          nome_cliente,
          data_agendamento,
          horario,
          servico,
          barbeiro
        );
      }

      res.status(201).json({ message: "Agendamento criado com sucesso!" });
    }
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

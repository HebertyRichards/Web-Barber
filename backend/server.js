const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

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

app.delete(
  "https://web-barber-xi.vercel.app/cancelar-agendamento/:id",
  (req, res) => {
    const idAgendamento = req.params.id;

    if (!idAgendamento) {
      return res
        .status(400)
        .json({ message: "ID do agendamento é obrigatório." });
    }

    const sql = "DELETE FROM agendamentos WHERE id = ?";

    pool.query(sql, [idAgendamento], (err, result) => {
      if (err) {
        console.error("Erro ao deletar agendamento:", err);
        return res
          .status(500)
          .json({ message: "Erro ao cancelar o agendamento." });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Agendamento não encontrado." });
      }

      res.status(200).json({ message: "Agendamento cancelado com sucesso!" });
    });
  }
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Base de datos ficticia
const users = [
  {
    username: "usuario_prueba",
    expiryDate: "2023-12-31 23:59:59",
    valid: true,
  },
];

app.post("/api/verificar-usuario", (req, res) => {
  const { usuario } = req.body;
  const user = users.find((user) => user.username === usuario);

  if (user) {
    const response = `${user.valid ? "valido" : "no_valido"};${user.expiryDate}`;
    res.send(response);
  } else {
    res.status(404).send("Usuario no encontrado");
  }
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
let arrayTransacciones = [];
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  express.json({
    type: true,
  })
);

app.use(cors());

app.get("/transaction", (req, res) => {
  res.send(JSON.stringify(arrayTransacciones));
});

app.post("/transaction", (req, res) => {
  const transaccion = req.body;
  arrayTransacciones.push(transaccion);
  console.log(arrayTransacciones);
});

app.listen(3000, () => {
  console.log(`la app esta escuchando en http://localhost:3000`);
});

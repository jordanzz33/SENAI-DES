require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();
const carroRoutes = require("./src/routes/carro.routes");
const clienteRoutes = require("./src/routes/cliente.routes");

app.use(express.json()); 
app.use(cors());

app.use(carroRoutes);
app.use(clienteRoutes);


app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});
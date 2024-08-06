const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const {connection} = require("./db")
 const { productRouter } = require('./Routes/product.routes');

const app = express();
// Middleware
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use(express.static('public'));
 app.use(cors())
app.use("/hwpro",productRouter)
require('dotenv').config();
  const PORT = process.env.PORT || 7000;

    async function startServer() {
        try {
          await connection;
          console.log("Database connection Established");
        } catch {
          console.log("Database connection Failed");
        }
      
        app.listen(PORT,() => {
          console.log(`Server is running at http://localhost:${PORT}`);
          console.log("Server Started");
        });
      }
      
      startServer();





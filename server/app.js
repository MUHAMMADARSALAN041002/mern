
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json())
app.use(require("./routes/Routes"));

require("./db/connection");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listen at the port : ${PORT}`);
});

const connectToMongo = require("./db");

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});

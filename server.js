import express from "express";
import dbConnection from "./src/db/dbConnection.js";

try {
  dbConnection();
} catch (error) {
  console.error(`Error connecting database to the server. ${error}`);
}

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});

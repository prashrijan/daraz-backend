import express from "express";
import dbConnection from "./src/db/dbConnection.js";
import userRouter from "./src/routes/userRoutes.js";
import cors from "cors";

try {
  dbConnection();
} catch (error) {
  console.error(`Error connecting database to the server. ${error}`);
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);
// app.use("/api/v1/products", productRouter)
// app.use("/api/v1/orders", orderRouter)

app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});

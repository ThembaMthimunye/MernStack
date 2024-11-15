import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/products",productRoutes)

const port=process.env.PORT;
console.log(process.env.MONGO_URI);
app.listen(port, () => {
  console.log("Server started at http://localhost:"+port);
  connectDB();
});

//NQnMncKIeYC5sAk9

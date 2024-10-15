import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

// console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allow us to accept json data in the req.body

app.use("/api/products", productRoutes); // use the productRoutes for any routes that start with /api/products

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http:localhost:" + PORT);
});

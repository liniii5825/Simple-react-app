import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allow us to accept json data in the req.body

app.use("/api/products", productRoutes); // use the productRoutes for any routes that start with /api/products

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist"))); // serve static files from the dist folder

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  ); // serve the index.html file for all other routes
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http:localhost:" + PORT);
});

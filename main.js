import express from "express";
import cors from "cors";
import router from "./src/router.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.use((req, res) => {
  res.status(404).send("url not found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Running on port: " + PORT);
});

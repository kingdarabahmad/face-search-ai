import "dotenv/config";
import express from "express";

import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello from the backend");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
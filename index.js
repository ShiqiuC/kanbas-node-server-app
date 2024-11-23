import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
console.log("current listening on: ", process.env.PORT || 4000);
app.listen(process.env.PORT || 4000);

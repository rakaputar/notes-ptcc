import express from "express";
import cors from "cors";
import route from "./route/route.js";
//const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(3000,()=> console.log("server berjalan di port 3000"))

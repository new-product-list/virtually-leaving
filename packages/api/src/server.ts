import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/ok", (_req, res) => {
  res.status(200).send("ok").end();
});

app.use(router);

//app.listen(3000);

export default app;

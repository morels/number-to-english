import express from "express";
import digitToWordsController from "./server/controllers/digitToWordsController";
import morgan from "morgan";

const app = express();
const router = express.Router();

app.use(morgan("combined"));
app.use(express.static("public"));

router.get("/", (req, res) => {
  res.sendfile("../public/index.html");
});

app.get("/apis/digitToWords/:numberInDigits", digitToWordsController);

app.listen(5000);

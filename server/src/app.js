import express from "express";
import digitToWordsController from "./server/controllers/digitToWordsController";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

// const port = process.env.PORT || 3001;
const port = 3001;

const app = express();
const router = express.Router();

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static("public"));

// router.get("/", (req, res) => {
//   res.sendfile("../public/index.html");
// });

app.get("/api/digitToWords/:numberInDigits", digitToWordsController);

app.listen(port);

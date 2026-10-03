import express from "express";
import path from "path";
import homeRouter from "./routes/home";

const app = express();
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});

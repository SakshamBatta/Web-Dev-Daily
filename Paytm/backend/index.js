const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
const cors = require("cors");

require("./db");
app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log("Server started at port no 3000");
});

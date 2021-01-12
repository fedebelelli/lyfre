const express = require("express");
require("./database/config/db");
const postRouter = require("./Routers/post-router");

const app = express();

app.use(postRouter);

app.listen(5000, () => {
  console.log("Server running...");
});

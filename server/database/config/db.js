const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Charlydt:lyfre2021@lyfre.im9f9.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => console.log("Running database..."))
  .catch((err) => console.error(err));

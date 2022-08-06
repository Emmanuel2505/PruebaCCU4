const mongoose = require("mongoose");
mongoose
  .connect("mongodb://mongo/notasdb")
  .then((db) =>
    console.log(`La base de datos está conectada a ${db.connection.host}`)
  )
  .catch((err) => console.log(err));

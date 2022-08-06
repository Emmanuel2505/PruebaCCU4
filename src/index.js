// require("dotenv").config();
const app = require("./server");
require("./database");

async function main() {
  await app.listen(3000, () => {
    console.log("Servidor en el puerto 3000");
  });
}

main();

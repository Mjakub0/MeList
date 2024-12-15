const express = require("express");
const contentRoutes = require("./src/routes/contentRoutes");

const app = express();
app.use(express.json()); // Middleware na spracovanie JSON vstupov

// Registrácia rout
app.use("/content", contentRoutes);

// Soustenie servera
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server beží na porte ${PORT}`);
});

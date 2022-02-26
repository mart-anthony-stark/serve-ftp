const express = require("express");
const serveIndex = require("serve-index");

const app = express();

app.use(
  "/ftp",
  express.static("public"),
  serveIndex("public", { icons: true })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

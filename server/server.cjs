const express = require('express')
const path = require('path')

const app = express();

const distPath = path.join(__dirname, '..', 'dist/');
const port = process.env.PORT || 3000;

app.use(express.static(distPath));

app.all('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
});
app.listen(port, () => {
  console.log("Server is up");
});
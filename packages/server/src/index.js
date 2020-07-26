var express = require("express");
var cors = require("cors");
const { response } = require("express");

var app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/person", (request, response) => {
  response.json([
    { id: 1, name: "Authur" },
    { id: 2, name: "Mary" },
  ]);
});

app.get("/person/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const data = [
    { id: 1, name: "Authur" },
    { id: 2, name: "Mary" },
  ];
  const item = data.filter(function (source) {
    return source.id === id;
  });
  response.json(item.length ? item[0] : null);
});

app.listen(PORT, () => {
  console.log("Init Server Port: " + PORT);
});

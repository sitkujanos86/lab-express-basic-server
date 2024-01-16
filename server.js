const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response) => {
  response.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (request, response) => {
  response.sendFile(__dirname + "/data/projects.json");
});

app.get("/api/articles", (request, response) => {
  response.sendFile(__dirname + "/data/articles.json");
});

app.get("/*", (request, response) => {
  response.sendFile(__dirname + "/views/not-found.html");
});

app.listen(5005, () => console.log("My first app listening on port 5005!"));

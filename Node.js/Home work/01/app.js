const os = require("os");
const settings = require("./settings");
const express = require("express");
const app = express();

let stage = {
  name: null,
  sername: null,
  email: null,
  city: null,
  country: null,
};

app.use(express.urlencoded({ extended: false }));

//home
app.get("/", (req, resp) => {
  resp.redirect("/home");
});

app.get("/home", (req, resp) => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  resp.send(
    `<h1 style="margin: auto; width: min-content">${day}.${
      month < 10 ? "0" + month : month
    }.${year}</h1>
    <a href="/data">Go to data</a>
    `
  );
});

//add
app.get("/add", (req, resp) => {
  let inputs = "";
  for (const param in stage) {
    inputs += `
    <p style="text-transform: capitalize">${param}:</p>
    <input value="${
      stage[param] ? stage[param] : ""
    }" type="text" name="${param}" placeholder="Enter ${param}..." />`;
  }
  resp.send(`
    <form method="post">
        ${inputs}
        <br>
        <button type="submit">Save</button>
    </form>
    <a href="/home">Go to home</a>
    <a href="/data">Go to data</a>
  `);
});
app.post("/add", (req, resp) => {
  console.log(req.body);
  stage = req.body;
  resp.redirect("/add");
});

//data
app.use("/data", (req, resp, next) => {
  for (const param in stage) {
    if (stage[param]) {
      next();
    }
  }
  resp.send(
    'No data <a href="/add">Go to add</a> <a href="/home">Go to home</a>'
  );
});
app.get("/data", (req, resp) => {
  let result = "";
  for (const param in stage) {
    result += `<p><strong style="text-transform: capitalize">${param}:</strong> ${stage[param]}</p>`;
  }
  result += '<a href="/home">Go to home</a> <a href="/add">Go to add</a>';
  resp.send(result);
});

app.listen(settings.port, settings.host);

//setup
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3000;

let app = express();
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url} \n`;
  fs.appendFileSync("mar.json", log);
  console.log(log);
  next();
});

// app.use((req, res, next) => {
//   let log = `$Site is under Maintanence \n`;
//   fs.appendFileSync("mar.json", log);
//     res.render("maintanence.hbs", {
//       pageTitle: "Maintanence Page",
//       underMaintanence: "Site is under Maintanence"
//     });
//   });

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("scremIt", text => {
  return text.toUpperCase();
});
//app.gets
app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcome: "Welcome to the Page"
  });
});

app.get("/maintanence", (req, res) => {
  // res.send('<h1>About MY</h1>');
  res.render("maintanence.hbs", {
    pageTitle: "Maintanence Page",
    underMaintanence: "Site is under Maintanence"
  });
});

app.get("/marina", (req, res) => {
  // res.send('<h1>About MY</h1>');
  res.render("marina.hbs", {
    pageTitle: "Marina's Page"
  });
});

app.get("/about", (req, res) => {
  // res.send('<h1>About MY</h1>');
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    e400: "Bad Request",
    e401: "Unauthorized",
    e402: "Payment Required",
    e403: "Forbidden",
    e404: "Page Not Found",
    e405: "Method Not Allowed",
    e406: "Not Acceptable",
    e408: "Request Timeout",
    e426: "Upgrade Required",
    e500: "Internal Server Error",
    e502: "Bad Gateway",
    e503: "Service Unavailable"
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

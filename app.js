// imports
import express from "express";
const app = express();
const port = 8888;

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

//set views
//app.set('views', './views');
//app.set('view engine', 'html');

//this displays my html files
app.get("", (req, res) => {
  res.sendFile(__dirname + "/views/web.html");
});

app.get("/logged", (req, res) => {
  res.sendFile(__dirname + "/views/logged.html");
});

//listen on port 8888
app.listen(port, () => console.info(`Listening on port ${port}`));

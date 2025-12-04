const express = require('express')
const app = express();
const bodyparser = require("body-parser");
const session = require("express-session");
const path = require("path");
const ejs = require("ejs");
const url = require("url");

app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: true })); 
app.engine("html", ejs.renderFile); 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

//sayfalar

app.get("/", (req, res) => {
  res.render("index", {
    user: req.user
  });
});


app.get("/test", (req, res) => {
  res.render("test", {
    user: req.user
  });
});


app.get("/projects", (req, res) => {
  res.render("projects", {
    user: req.user
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    user: req.user
  });
});

app.get("/coming-soon", (req, res) => {
  res.render("coming-soon", {
    user: req.user
  });
});


app.get("/links", (req, res) => {
  res.render("links", {
    user: req.user
  });
});


// linkler 

 app.get('/github', function (req, res) {
  res.redirect('https://github.com/MuhammetOmerd')
})

 app.get('/instagram', function (req, res) {
  res.redirect('https://instagram.com/_muhammet.64_')
})


app.get('/gmail', function (req, res) {
  res.redirect('https://mail.google.com/muhammetomer0101@gmail.com')
})



// images 

app.get('/images/vsllogo', function (req, res){
  res.redirect('https://github.com/MuhammetOmerd.png')
})

app.get('/images/vslbg', function (req,res){
  res.redirect('https://cdn.glitch.me/cd94df14-05c6-4c80-b51e-224cebd0fce9%2F4024a1cb-0fbe-4361-8592-83f58f415a37.image.png?v=1635441571598')
})


// hata

app.get("/hata", (req, res) => {
  res.render("hata", {
    user: req.user,
    statuscode: req.query.statuscode,
    message: req.query.message
  });
});

app.use((req, res) => {
  const err = new Error("Not Found");
  err.status = 404;
  return res.redirect(
    url.format({
      pathname: "/hata",
      query: {
        statuscode: 404,
        message: "Sayfa Bulunamadı"
      }
    })
  );
});

// bos

app.listen(8080);
console.log("Proje Hazır! ");


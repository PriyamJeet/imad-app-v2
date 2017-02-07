var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articles = `{
 articleone : {
    title :"my first article"
 }
 articletwo : {
    title :"my second article"
 }
 articlethree : {
    title :"my thirs article"
 }
}`;

function gethtmltemplate(data){
    var title = data.title;
var htmpltemplate = `<html>
    <head>
         <link rel="stylesheet" type="text/css" href="ui/style.css">
    <title>$title</title>
    </head>
    
    
    <body>
        <div class ="container">
        <a href="/" >Home </a>
        </div>
    </body>
    </html>`;
    return htmpltemplate;
    
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
   var articleName = req.params.articleName;
  res.sendFile(gethtmltemplate(articles[articleame]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:article-name', function (req, res) {
    var articlename = req.
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

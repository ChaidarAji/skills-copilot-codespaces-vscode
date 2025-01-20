// create web server
// create a route for /comments
// create a route for /comments/new
// create a route for /comments/:id
// create a route for /comments/:id/edit
// create a route for /comments/:id/delete

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var comments = [
    {id: 1, author: 'John', text: 'I love this place!'},
    {id: 2, author: 'Jane', text: 'I hate this place!'},
    {id: 3, author: 'Jack', text: 'I am neutral about this place!'}
];

app.get('/', function(req, res){
    res.render('comments', {comments: comments});
});

app.post('/comments', function(req, res){
    var newComment = {
        id: comments.length + 1,
        author: req.body.author,
        text: req.body.text
        };
        comments.push(newComment);
        res.redirect('/');
    });
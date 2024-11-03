var express = require('express'); 
var ejs = require('ejs');
var app = express();

app.engine('ejs', ejs.renderFile); // テンプレートエンジンにejsを指定

app.get('/', function(req, res) {
    res.render('temp.ejs', {       // viewsフォルダから検索される
    	contents: '<p>app</p>'
    });
});

var server = app.listen(1234, function() {
    console.log('サーバを起動しました');
});
var http = require('http');      // httpサーバなどを扱う
var fs = require('fs');          // ファイルを扱う
var ejs = require('ejs');        // ejsを扱う

var main = fs.readFileSync('./main.ejs', 'utf-8');

var server = http.createServer(function(req, res) {
    var data = ejs.render(main, {
    	title: 'EJSのテスト',
    	contents: '<p>index</p>',
    	arr: ['いちご', 'リンゴ']
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();

});
server.listen(1234);
console.log('サーバを起動しました');
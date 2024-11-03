var http = require('http');      // httpサーバなどを扱う
var fs = require('fs');          // ファイルを扱う
var url = require('url');        // urlの文字列を解析

var server = http.createServer(function(req, res) {
    var urlParts = url.parse(req.url, true);
    var path = __dirname + '/' + urlParts.pathname;
    var stream = fs.createReadStream(path);
    stream.pipe(res);

});
server.listen(1234);
console.log('サーバを起動しました');
var http = require('http');
//引入文件操作魔魁啊
var fs = require('fs');
http.createServer(function (request, response) {
        // 发送 HTTP 头部
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain'});
        if(request.url === '/imgUrl.json'){
            fs.readFile("data/imgUrl.json","utf-8",function (err,data) {
                if (err) {
                    console.log("read error");
                    return;
                }
                response.end(data);
            });
        }
    if(request.url === '/news.json'){
        fs.readFile("data/news.json","utf-8",function (err,data) {
            if (err) {
                console.log("read error");
                return;
            }
            response.end(data);
        });
    }
    if(request.url === '/comment.json'){
        fs.readFile("data/comment.json","utf-8",function (err,data) {
            if (err) {
                console.log("read error");
                return;
            }
            response.end(data);
        });
    }
    if(request.url === '/classily.json'){
        fs.readFile("data/classily.json","utf-8",function (err,data) {
            if (err) {
                console.log("read error");
                return;
            }
            response.end(data);
        });
    }
    if(request.url === '/img.json'){
        fs.readFile("data/img.json","utf-8",function (err,data) {
            if (err) {
                console.log("read error");
                return;
            }
            response.end(data);
        });
    }
    if(request.url === '/setComment.json'){
        var post = "";
        request.on('data',function (chunk) {
            post += chunk;
            fs.writeFile("data/comment.json",post,function (err,data) {
                if (err) {
                    console.log("read error");
                    return;
                }
                console.log("数据写入成功！");
                console.log("--------我是分割线-------------");
            });
        });
    }
    }).listen(8080);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/imgUrl.json');
var date = new Date();
console.log( date);
